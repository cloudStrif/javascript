
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<title>404 Error</title>
	<style>body{background:#000;color:#0f0;}#listing{display:none}</style>
</head>

<body>
	<div id="output">
		<code id="terminal"></code>

	</div>

	<ul id="listing">
	
	  <li>entrer le texte ici</li>
	</ul>
	
	<script>
	<!--
            var strings, output, currentString, stringLength, stringsLength, posInString, rowIndex, remeberedContent;
            function init() {
                strings = document.getElementsByTagName("li");

                currentString    = strings[0].innerHTML;
                stringLength     = currentString.length;
                stringsLength    = strings.length;
                posInString      = 0;
                rowIndex         = 0;
                remeberedContent = "";
                output           = document.getElementById("terminal");

                writeText();
            }

            function writeText() {
                remeberedContent += currentString.charAt(posInString)
                output.innerHTML = remeberedContent + "<blink>_</blink>";

                if (posInString++ == stringLength) {
                    posInString = 0;
                    rowIndex++;
                    remeberedContent += "<br />";

                    if (rowIndex != stringsLength) {
                        window.scrollTo(0, document.body.scrollHeight);
                        currentString = strings[rowIndex].innerHTML;
                        stringLength = currentString.length;
                        setTimeout(writeText, 1500);
                    }
                } else {
                    setTimeout(writeText, 60);
                }
            }

            init();
	//-->
	</script>
</body>
</html>
