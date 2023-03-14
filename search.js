function eregister(){
    var username=document.getElementById("username").value
    var password=document.getElementById("password").value
    var email=document.getElementById("email").value
    if(!localStorage.getItem("emptable"))localStorage.setItem("emptable",'[]');
    empobj={name:username,pass:password,mail:email}
    emplist=JSON.parse(localStorage.getItem("emptable"));
    emplist.push(empobj);
    emplist=JSON.stringify(emplist);
    localStorage.setItem("emptable",emplist)   
}
function elogin(){
    var email=document.getElementById("email").value
    var password=document.getElementById("password").value
    emptable=JSON.parse(localStorage.getItem("emptable"))
    if(email==="admin@gmail.com"){
        if(password==="admin"){
            localStorage.setItem("name","admin")
            window.location.href="http://127.0.0.1:5500/admin.html"
        }
        else{
            alert("wrong password");
        }
    }
    else{
        flag=0
        for(variable of emptable){
            console.log(variable);
            if(variable["mail"]===email){
                if(variable["pass"]==password){
                    localStorage.setItem('name',variable["name"])
                    flag=1
                    window.location.href="http://127.0.0.1:5500/browsecandidate.html"
                }
                else{
                    alert("wrong password")
                }
            }
        }
        if(flag==0)alert("user does not exist register first")
    }
}
function cregister(){
    var username=document.getElementById("username").value
    var password=document.getElementById("password").value
    var email=document.getElementById("email").value
    if(!localStorage.getItem("ctable"))localStorage.setItem("ctable",'[]');
    empobj={name:username,pass:password,mail:email}
    emplist=JSON.parse(localStorage.getItem("ctable"));
    emplist.push(empobj);
    emplist=JSON.stringify(emplist);
    localStorage.setItem("ctable",emplist)
    
}
function clogin(){
    var email=document.getElementById("email").value
    var password=document.getElementById("password").value
    emptable=JSON.parse(localStorage.getItem("ctable"))
    if(email==="admin@gmail.com"){
        if(password==="admin"){
            localStorage.setItem("name","admin")
            window.location.href="http://127.0.0.1:5500/admin.html"
        }
        else{
            alert("wrong password")
        }
    }
    else{
        flag=0
        for(variable of emptable){
            console.log(variable);
            if(variable["mail"]===email){
                if(variable["pass"]==password){
                    localStorage.setItem('name',variable["name"])
                    flag=1
                    window.location.href="http://127.0.0.1:5500/browse-job.html"
                }
                else{
                    alert("wrong password")
                }
            }
        }
        if(flag==0){
            alert("user doesnot exist register first")
        }
    }
}
function postjob(){
    var jobname=document.getElementById("jobname").value
    var jobdesc=document.getElementById("jobdesc").value
    var location=document.getElementById("location").value
    var experience=document.getElementById("experience").value
    var skills=document.getElementById("skills").value
    var salary=document.getElementById("salary").value
    if(!localStorage.getItem("jobs"))localStorage.setItem("jobs",'[]')
    jobobj={jname:jobname,jdesc:jobdesc,jlocation:location,jexp:experience,jskills:skills,jsalary:salary}
    joblist=JSON.parse(localStorage.getItem("jobs"))
    joblist.push(jobobj);
    joblist=JSON.stringify(joblist)
    localStorage.setItem("jobs",joblist)
}
document.getElementById("profile").innerHTML=`<i class="fa fa-user"></i>`+localStorage.getItem("name");
if(window.location.href==="http://127.0.0.1:5500/browse-job.html"){
    var joblist=localStorage.getItem("jobs")
    joblist=JSON.parse(joblist);
    for(job of joblist){
        var skills=job["jskills"].split(',');
        var skillsstr=""
        for(skill of skills){
            skillsstr+=`<li><i class="">`+skill+`</i></li>`
        }
        document.getElementById("manual").innerHTML+=`<li class="parts">
        <a href="job-detail.html">
            <div class="d-flex m-b30">
                <div class="job-post-company">
                    <span><img src="images/logo/icon1.png"/></span>
                </div>
                <div class="job-post-info">
                    <h4>`+job["jname"]+`</h4>
                    <ul>
                        <li><i class="fa fa-map-marker"></i>`+job["jlocation"]+`</li>
                        <li><i class="fa fa-bookmark-o"></i> Full Time</li>
                        <li><i class="fa fa-clock-o"></i> Published 11 months ago</li>
                    </ul>
                </div>
            </div>
            <div class="d-flex">
                <div class="job-time mr-auto">
                    <span>
                        <b><i  class="d-flex" style="width: fit-content; color:blue">skills:</i></b>
                    </span>
                    <span>
                        <ul class="d-flex">
                            `+skillsstr+`
                        </ul>
                        </span>
                </div>
                <div class="salary-bx">
                    <span>$2500</span>
                </div>
            </div>
            <span class="post-like fa fa-heart-o"></span>
        </a>
    </li>`
    }
}
function removecan(ev){
    var target=event.target
    ind=target.id
    canlist=localStorage.getItem("ctable");
    canlist=JSON.parse(canlist)
    canlist.splice(ind-1,1);
    canlist=JSON.stringify(canlist)
    localStorage.setItem("ctable",canlist);
    location.reload()
}
function removeemp(ev){
    var target=event.target
    ind=target.id
    emplist=localStorage.getItem("emptable")
    emplist=JSON.parse(emplist)
    emplist.splice(ind-1,1)
    emplist=JSON.stringify(emplist)
    localStorage.setItem("emptable",emplist)
    location.reload()
}
if(window.location.href==="http://127.0.0.1:5500/admin.html"){
    canlist=localStorage.getItem("ctable");
    canlist=JSON.parse(canlist)
    var i=1;
    for(can of canlist){
        document.getElementById("candidates").innerHTML+=`<tr>
                                                <th scope="row">`+i+`</th>
                                                <td>`+can["name"]+`</td>
                                                <td>4</td>
                                                <td>2</td>
                                                <td>`+can["mail"]+`</td>
                                                <td><button id="`+i+`" style="background-color: red; border-radius: 10px; height:30px; width:30px" onclick="removecan(this)">X</button></td>
                                                </tr>`
        i+=1
    }
    emplist=localStorage.getItem("emptable")
    emplist=JSON.parse(emplist)
    var i=1
    for(emp of emplist){
        document.getElementById("employer").innerHTML+=`<tr>
                                                        <th scope="row">`+i+`</th>
                                                        <td>`+emp["name"]+`</td>
                                                        <td>10</td>
                                                        <td>7</td>
                                                        <td>`+emp["mail"]+`</td>
                                                        <td><button id="`+i+`" style="background-color: red; border-radius: 10px; height:30px; width:30px" onclick="removeemp(this)">X</button></td>
                                                        </tr>`
        i+=1
    }

}