function add_to_discord_modal() {
    var init = {
        method: 'GET',
        mode: 'cors',
        cache: 'reload'
    };
    fetch('https://discord.com/api/guilds/762879404795363359/widget.json', init).then(function(response) {
        if (response.status != 200) {
            document.getElementById('online-users').innerText = 'ERR';
            return;
        }
        response.json().then(function(data) {
            //var channels = data.channels;
            for (var i = 0; i < data.members.length; i++) {
                var li = document.createElement('li');
                var discord_list = document.getElementById('discord-list');
                var image_url = data.members[i].avatar_url;
                var username = data.members[i].nick == undefined ? data.members[i].username : data.members[i].nick;
                var member_wrap = document.createElement('div');
                member_wrap.classList.add('member');

                var image_wrap = document.createElement('div');
                image_wrap.classList.add('member-img')
                var user_img = document.createElement('img');

                var user_wrap = document.createElement('div');
                user_wrap.innerText += username;
                user_img.setAttribute('src', image_url);
                image_wrap.appendChild(user_img);
                member_wrap.appendChild(image_wrap);
                member_wrap.appendChild(user_wrap);
                li.appendChild(member_wrap);
                discord_list.appendChild(li);

                document.getElementById('online-users').innerText = 'Online Users: ' + data.presence_count;
            }
        });
    }).catch(function(err) {});
}

function anti_wise_hack(e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}

var currentHtmlContent;

var element = new Image();

var elementWithHiddenContent = document.querySelector("#hide-this");

var innerHtml = elementWithHiddenContent.innerHTML;



element.__defineGetter__("id", function() {

    currentHtmlContent = "";
    clear_data();

});

function clear_data() {
    setInterval(function() {

        currentHtmlContent = innerHtml;

        console.log(element);

        console.clear();

        elementWithHiddenContent.innerHTML = currentHtmlContent;


    }, 1000);
}

//document.onkeydown = anti_wise_hack; // stinky monkeys

add_to_discord_modal();