(function(){

  var $ = function(id){ return document.getElementById(id); };
  var auth, db;

  function showLogin(){ $("loginScreen").hidden = false; $("dashScreen").hidden = true; }
  function showDash(){ $("loginScreen").hidden = true; $("dashScreen").hidden = false; }

  function loginError(msg){
    $("loginError").textContent = msg;
    $("loginError").hidden = false;
  }

  function friendlyAuthError(err){
    switch (err && err.code){
      case "auth/invalid-credential":
      case "auth/wrong-password":
      case "auth/user-not-found":
        return "Email o contraseña incorrectos.";
      case "auth/invalid-email":
        return "Ese email no es válido.";
      case "auth/too-many-requests":
        return "Demasiados intentos. Probá de nuevo en unos minutos.";
      default:
        return "No se pudo iniciar sesión (" + (err && err.message ? err.message : "error desconocido") + ").";
    }
  }

  function fmtDate(ts){
    if (!ts || typeof ts.toDate !== "function") return "—";
    var d = ts.toDate();
    return d.toLocaleDateString("es-AR") + " " + d.toLocaleTimeString("es-AR", {hour:"2-digit", minute:"2-digit"});
  }

  function areaCell(entry){
    return entry ? (entry.area + " · " + entry.pct + "%") : "—";
  }

  function loadResults(){
    db.collection("resultados").orderBy("fecha", "desc").limit(200).get().then(function(snap){
      var body = $("resultsBody");
      body.innerHTML = "";
      $("countLabel").textContent = snap.size + " resultado" + (snap.size === 1 ? "" : "s") + " (últimos 200)";
      $("emptyState").hidden = snap.size > 0;

      snap.forEach(function(doc){
        var d = doc.data();
        var top = d.top || [];
        var full = d.ranking || top;

        var pdfCell = d.pdfUrl
          ? '<a href="' + d.pdfUrl + '" target="_blank" rel="noopener">Ver PDF</a>'
          : '<span class="muted">—</span>';

        var tr = document.createElement("tr");
        tr.innerHTML =
          '<td class="mono">' + fmtDate(d.fecha) + '</td>' +
          '<td>' + (d.nombre ? d.nombre : '<span class="muted">Sin nombre</span>') + '</td>' +
          '<td>' + areaCell(top[0]) + '</td>' +
          '<td>' + areaCell(top[1]) + '</td>' +
          '<td>' + areaCell(top[2]) + '</td>' +
          '<td>' + pdfCell + '</td>' +
          '<td><button class="link-btn detail-btn" type="button">Ver todo</button></td>';

        var detailRow = document.createElement("tr");
        detailRow.className = "detail-row";
        detailRow.hidden = true;
        var chips = full.map(function(r){ return '<span class="career-chip">' + r.area + ' · ' + r.pct + '%</span>'; }).join("");
        detailRow.innerHTML = '<td colspan="7"><div class="careers" style="margin-top:4px;">' + chips + '</div></td>';

        tr.querySelector(".detail-btn").addEventListener("click", function(){
          detailRow.hidden = !detailRow.hidden;
          this.textContent = detailRow.hidden ? "Ver todo" : "Ocultar";
        });

        body.appendChild(tr);
        body.appendChild(detailRow);
      });
    }).catch(function(err){
      alert("No se pudieron cargar los resultados: " + err.message);
    });
  }

  function init(){
    if (typeof firebase === "undefined" || !window.FIREBASE_CONFIG || window.FIREBASE_CONFIG.apiKey === "TU_API_KEY"){
      loginError("Firebase todavía no está configurado (completá js/firebase-config.js).");
      $("loginForm").querySelector("button[type=submit]").disabled = true;
      return;
    }

    if (!firebase.apps.length) firebase.initializeApp(window.FIREBASE_CONFIG);
    auth = firebase.auth();
    db = firebase.firestore();

    auth.onAuthStateChanged(function(user){
      if (user){
        showDash();
        loadResults();
      } else {
        showLogin();
      }
    });

    $("loginForm").addEventListener("submit", function(e){
      e.preventDefault();
      $("loginError").hidden = true;
      var email = $("emailInput").value.trim();
      var pass = $("passInput").value;
      auth.signInWithEmailAndPassword(email, pass).catch(function(err){
        loginError(friendlyAuthError(err));
      });
    });

    $("logoutBtn").addEventListener("click", function(){ auth.signOut(); });
    $("refreshBtn").addEventListener("click", loadResults);
  }

  init();

})();
