var profile_pic;
const card = document.querySelector('.card');
const box = document.querySelector('.box');

async function basic_info_get(){
    const res = await fetch('https://api.github.com/users/jaison080');
    // const res = await fetch('https://random-data-api.com/api/users/random_user');
    const data = await res.json()
    
    const basic_info_text = document.createElement('h2');
    basic_info_text.textContent="Username";
    card.appendChild(basic_info_text);

    const name = document.createElement('h4');
    name.textContent=`${data.login}`;
    card.appendChild(name);

    profile_pic = new Image(100,100);
    profile_pic.src = `${data.avatar_url}`
    card.append(profile_pic);

    br=document.createElement('br');
    card.appendChild(br);
    br=document.createElement('br');
    card.appendChild(br);

    github_url=document.createElement('a');
    github_url.href=`${data.html_url}`;
    github_url.textContent = `${data.html_url}`
    card.appendChild(github_url);

    public_repos=document.createElement('p');
    public_repos.textContent = "No. of Public Repositories  : "+`${data.public_repos}`
    card.appendChild(public_repos);

    public_gists=document.createElement('p');
    public_gists.textContent = "No. of Public Gists : "+`${data.public_gists}`
    card.appendChild(public_gists);
    
    
}

async function repos_info_get(){
    
    const res = await fetch('https://api.github.com/users/jaison080/repos');
    const data = await res.json()
    
    br=document.createElement('br');
    box.appendChild(br);
    
    let div1 = document.createElement('div');
    div1.classList.add('card');
    box.appendChild(div1)
    
    const my_repo_text = document.createElement('h2');
    my_repo_text.textContent="My Repositories";
    div1.appendChild(my_repo_text);

    for(i=0;i<data.length;i++){
        // br=document.createElement('br');
        // box.appendChild(br);
    
        let div2 = document.createElement('div');
        div2.classList.add('repo');
        div1.appendChild(div2)

        const repo_info = document.createElement('h5');
        repo_info.textContent=data[i].name;
        div2.appendChild(repo_info);
        
        const repo_break = document.createElement('br');
        div2.appendChild(repo_break);

        const repo_link = document.createElement('a');
        repo_link.href=`${data[i].html_url}`;
        repo_link.textContent=`${data[i].html_url}`;
        div2.appendChild(repo_link);
if(data[i].description!=null){
        const desc_info = document.createElement('p');
        desc_info.textContent="Description :"+`${data[i].description}`;
        div2.appendChild(desc_info);}
    }
}

basic_info_get();
repos_info_get();