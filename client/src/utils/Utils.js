function loadScript(src) {
  return new Promise(function (resolve, reject) {
    const s = document.createElement("script");
    let r = false;

    // s.type = "text/javascript";
    s.src = src;
    // s.async = true;
    s.onerror = function (err) {
      reject(err, s);
    };
    s.onload = s.onreadystatechange = function (e) {
      //console.log(this.readyState); // uncomment this line to see which ready states are called.
      if (!r && (!this.readyState || this.readyState === "complete")) {
        r = true;
        resolve();
      }
    };
    const t = document.getElementsByTagName("script")[0];
    t.parentElement.insertBefore(s, t);
  });
}

export async function loadAllScripts() {
  const bodyScripts = document.body.getElementsByTagName("script");
  let scriptsName = [];
  let i = 0;
  for (let script of bodyScripts) {
    i++;
    if (script.src.indexOf(/static/) !== -1) {
      continue;
    }
    scriptsName.push(script.getAttribute("src"));
    if (i === bodyScripts.length) {
    }
  }
  for (let i = 0; i <= scriptsName.length; i++) {
    !!bodyScripts[i] && bodyScripts[i].remove();
    !!scriptsName[i] && (await loadScript(scriptsName[i]));
  }
}

var loadScriptCode = function (code) {
  var tag = document.createElement("script");
  tag.innerHTML = "";
  // tag.async = false;
  // tag.src = src;
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(tag);
};
