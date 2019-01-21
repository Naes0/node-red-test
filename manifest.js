/**
 * This code is machine generated.
 */
module.exports = function(RED) {
  var pf = RED.settings.functionGlobalContext.get("publishflows");
  if (typeof pf == "undefined") pf = [];
  pf.push(
    {
      "subflows": [
        {
          "name": "testsubflow",
          "id": "7e97b3d1.942cac",
          "checked": "checked"
        }
      ],
      "files": [
        {
          "isDirectory": "false",
          "name": "C:\\Users\\Sean\\.node-red\\projects\\ProjectOne\\flows_projectOne_cred.json",
          "path": "ne\\flows_projectOne_cred.json",
          "id": "flows-projectone-cred-json",
          "checked": ""
        },
        {
          "isDirectory": "false",
          "name": "C:\\Users\\Sean\\.node-red\\projects\\ProjectOne\\flows_projectOne.json",
          "path": "ne\\flows_projectOne.json",
          "id": "flows-projectone-json",
          "checked": ""
        },
        {
          "isDirectory": "false",
          "name": "C:\\Users\\Sean\\.node-red\\projects\\ProjectOne\\package.json",
          "path": "ne\\package.json",
          "id": "package-json",
          "checked": ""
        },
        {
          "isDirectory": "false",
          "name": "C:\\Users\\Sean\\.node-red\\projects\\ProjectOne\\README.md",
          "path": "ne\\README.md",
          "id": "readme-md",
          "checked": ""
        }
      ],
      "tabs": [
        {
          "label": "Flow 1",
          "id": "5f707bfb.3612a4",
          "checked": ""
        }
      ],
      "path": __dirname
    }
  );
  RED.settings.functionGlobalContext.set("publishflows", pf);
};
