

const jobby=[
    {
      "id": 1,
      "company": "Photosnap",
      "logo": "./images/photosnap.svg",
      "isNew": true,
      "featured": true,
      "position": "Senior Frontend Developer",
      "role": "Frontend",
      "level": "Senior",
      "postedAt": "1d ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["HTML", "CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 2,
      "company": "Manage",
      "logo": "./images/manage.svg",
      "isNew": true,
      "featured": true,
      "position": "Fullstack Developer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1d ago",
      "contract": "Part Time",
      "location": "Remote",
      "languages": ["Python"],
      "tools": ["React"]
    },
    {
      "id": 3,
      "company": "Account",
      "logo": "./images/account.svg",
      "isNew": true,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2d ago",
      "contract": "Part Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    },
    {
      "id": 4,
      "company": "MyHome",
      "logo": "./images/myhome.svg",
      "isNew": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "5d ago",
      "contract": "Contract",
      "location": "USA Only",
      "languages": ["CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 5,
      "company": "Loop Studios",
      "logo": "./images/loop-studios.svg",
      "isNew": false,
      "featured": false,
      "position": "Software Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["Ruby", "Sass"]
    },
    {
      "id": 6,
      "company": "FaceIt",
      "logo": "./images/faceit.svg",
      "isNew": false,
      "featured": false,
      "position": "Junior Backend Developer",
      "role": "Backend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "UK Only",
      "languages": ["Ruby"],
      "tools": ["RoR"]
    },
    {
      "id": 7,
      "company": "Shortly",
      "logo": "./images/shortly.svg",
      "isNew": false,
      "featured": false,
      "position": "Junior Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["HTML", "JavaScript"],
      "tools": ["Sass"]
    },
    {
      "id": 8,
      "company": "Insure",
      "logo": "./images/insure.svg",
      "isNew": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["Vue", "Sass"]
    },
    {
      "id": 9,
      "company": "Eyecam Co.",
      "logo": "./images/eyecam-co.svg",
      "isNew": false,
      "featured": false,
      "position": "Full Stack Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "3w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript", "Python"],
      "tools": ["Django"]
    },
    {
      "id": 10,
      "company": "The Air Filter Company",
      "logo": "./images/the-air-filter-company.svg",
      "isNew": false,
      "featured": false,
      "position": "Front-end Dev",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "1mo ago",
      "contract": "Part Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    }
  ];
  
  var container=document.querySelector('.container');
  const clearButton=document.querySelector('.clear');
  var buttonAdded=document.querySelector('.buttonAdded');

 

 // const skillList=Array.from(document.querySelectorAll('.skills'));
  //var lastElement=skillList[skillList.length-1];
  let cards=Array.from(document.querySelectorAll('.card'));

  var addedButtonArray=[];
  var k=0;
  var selectedArr=[];
  var selectedButton=Array.from(buttonAdded.querySelectorAll('.added'));

  displayDataItems(jobby); 
  clearButton.addEventListener('click',function(){
          
          const buttonAdded=document.querySelector('.buttonAdded');
          while(buttonAdded.hasChildNodes()){
                buttonAdded.removeChild(buttonAdded.firstChild);
          } 
          addedButtonArray.length=0;
  
  });
  
  window.addEventListener('DOMContentLoaded',function(){
      
    
    //displayDataItems(jobby);
     
   
     
          filterItem();
     
          document.querySelectorAll('.card').forEach(function(crd){
            writeRole(crd);
            writeLevel(crd);
            writeLanguages(crd);
            writeTools(crd);
          });

          
          

   
             
   });
  
  ///////GET ROLE////////////////////////////////////////////////////////////////////////////
  function getRole(){
          let jobData=jobby.reduce(function(but,item){ 
            if(!but.includes(item.role)){
                    but.push(item.role);
          }
          return but;
        },[]);
        return jobData;
  }

  function writeRole(card){
   
    card.querySelector('.skills .role').addEventListener('click',function(e){
      var selected=e.currentTarget.innerText;

      if(addedButtonArray.length==0)
      {      
                   addedButtonArray[0]=`<button class="added" id="role" data-btn="${e.currentTarget.innerHTML}" onclick="removeAddedButton();"  type="button"><span>${e.currentTarget.innerHTML}</span>&times</button>`;
                   buttonAdded.innerHTML= addedButtonArray.join('');
      }else{                           
                  addedButtonArray[0]=`<button class="added Role" id="role" data-btn="${e.currentTarget.innerHTML}" onclick="removeAddedButton();"  type="button"><span>${e.currentTarget.innerHTML}</span>&times</button>`;
                  buttonAdded.innerHTML= addedButtonArray.join('');
      }
     
});

}
    
  ///////GET LEVEL//////////////////////////////////////////////////////////////////////////////
  
  function getLevel(){
    let jobData=jobby.reduce(function(but,item){ 
      if(!but.includes(item.level)){
              but.push(item.level);
    }
    return but;
  },[]);
  return jobData;
  }
  
  
  
  function writeLevel(card){

          card.querySelector('.skills .level').addEventListener('click',function(e){
            if(addedButtonArray.length==0)
            {          addedButtonArray[0]='';
                         addedButtonArray[1]=`<button class="added" id="level" data-btn="${e.currentTarget.innerHTML}" onclick="removeAddedButton();"  type="button"><span>${e.currentTarget.innerHTML}</span>&times</button>`;
                         buttonAdded.innerHTML= addedButtonArray.join('');
            }else{                           
                        addedButtonArray[1]=`<button class="added" id="level" data-btn="${e.currentTarget.innerHTML}" onclick="removeAddedButton();"  type="button"><span>${e.currentTarget.innerHTML}</span>&times</button>`;
                        buttonAdded.innerHTML= addedButtonArray.join('');
            }
      });
  }
  
  
  ///////GET LANGUAGES//////////////////////////////////////////////////////////////////////////////
  
   function getLanguages(){
    let jobData=jobby.reduce(function(but,item){ 
      if(!but.includes(item.languages)){
              but.push(item.languages);
    }
    return but;
  },[]);
  return jobData;
  }
  
  
  function writeLanguages(card){   
          let cardIndex=Number(cards.indexOf(card));
          var a=1;
          a=cardIndex;
          var langs=getLanguages();
          card.querySelector('.skills .jobLang').addEventListener('click',function(e){
                  if(buttonAdded.innerHTML.includes(e.currentTarget.innerHTML)){
                            var a=addedButtonArray.indexOf(e.currentTarget);
                            var b=addedButtonArray.lastIndexOf(e.currentTarget);
                            if(a!=b){
                                      addedButtonArray.splice(b,1);
                            } 
                            console.log('varsa');
                  }else if(!buttonAdded.innerHTML.includes(e.currentTarget.innerHTML)){
                            console.log('yoksa');
                            
                         
                                    addedButtonArray.splice(addedButtonArray.length,1,`<button class="added" id="language" data-btn="${e.currentTarget.innerHTML}"onclick="removeAddedButton();"  type="button"><span>${e.currentTarget.innerHTML}</span>&times</button>`);
                 }
   
                          buttonAdded.innerHTML=addedButtonArray.join(''); 
            
                      });   
  }
  
                     
  function getTools(){
    let jobData1=jobby.reduce(function(but1,item1){ 
      if(!but1.includes(item1.tools)){
              but1.push(item1.tools);
      }
      return but1;
  },[]);
  return jobData1;
  }
  



  function writeTools(card){   

  var tools=getTools();
  
    card.querySelector('.skills').lastElementChild.addEventListener('click',function(e){
            if(buttonAdded.innerHTML.includes(e.currentTarget.innerHTML)){
                      var a=addedButtonArray.indexOf(e.currentTarget);
                      var b=addedButtonArray.lastIndexOf(e.currentTarget);
                      if(a!=b){
                                addedButtonArray.splice(b,1);
                      } 
                      console.log('tools varsa');
            }else if(!buttonAdded.innerHTML.includes(e.currentTarget.innerHTML)){
                      console.log(e.currentTarget.innerHTML);
                      console.log('tools yoksa');

                      
                      tools.forEach(function(t){
                          if(e.currentTarget.innerHTML==t){
                                      addedButtonArray.splice(addedButtonArray.length,0,`<button class="added" id="tool" data-btn="${t}" onclick="removeAddedButton();"  type="button"><span>${t}</span>&times</button>`);
                          }
                                  
                      });
                                   
            }
            buttonAdded.innerHTML=addedButtonArray.join('');        
    });           
} 
  
  
  function displayDataItems(jobItems){
  
      let jobData=jobItems.map(function(job){
          
          return `          <div class="card flex">
                                                  <div class="cardFirst">            
                                                  <div class="imgLogo">
                                                            <img src=${job.logo} alt="">
                                                  </div>
                                                  <div class="mid">
                                                          <div class="personInfo">
                                                                  <h3 class="company">${job.company}</h3><span  id="isNew">New!</span><span class="featured">Featured</span>
                                                          </div>
                                                          <div class="jobPos">
                                                                  <h3>${job.position}</h3>
                                                          </div>
                                                          <div class="postContLoc">
                                                                  <ul class="post">
                                                                          <li class="work">${job.postedAt}</li>
                                                                          <li class="blank"></li>
                                                                          <li class="work">${job.contract}</li>
                                                                          <li class="blank"></li>
                                                                          <li class="work">${job.location}</li>
                                                                  </ul>
                                                          </div>
                                                  </div>
                                          </div>
  
  
                                          <div class="cardSecond">
                                                  <hr/>
                                                  <div id="langTool">
                                                          <ul class="skills">        
                                                                      <li id="jsonData"  class="role">${job.role}</li>  
                                                                      <li id="jsonData" class="level">${job.level}</li>
                                                                      ${job.languages.map(lang=>`<li id="jsonData" class="jobLang">${lang}</li>`).join('')}
                                                                      ${job.tools.map(tool=>`<li id="jsonData" class="jobTool">${tool}</li>`).join('')}
                                                            </ul>
                                                  </div>
                                          </div>
                        
              </div>`;          
                
                      
      });
  
      jobData= jobData.join("");
      container.innerHTML=jobData;
  }
  
  
  function removeAddedButton(){
            var buttonAdd=document.querySelector('.buttonAdded');
            var buttonsAdded=Array.from(buttonAdd.querySelectorAll('.added'));
            buttonsAdded.forEach(function(btn){
                  btn.addEventListener('mousedown',function(){
                        btn.remove();
                  })     
            });
  }


  
  
  
  function filterItem(){ 

/*    addedButtonArray.forEach(function (btn) {
  
          const category = btn.innerText;
          const menuCategory = jobby.filter(function (menuItem) {
          console.log(menuItem);
          if (menuItem.role==category || menuItem.level==category || menuItem.languages==category || menuItem.tools==category){
                    return menuItem;
          }
          });
          console.log(menuCategory);
          if (addedButtonArray.length==0) {
            displayDataItems(jobby);
          } else {
            displayDataItems(menuCategory);
          }  
  }); */
          
/*    var buttonAdded=document.querySelector('.buttonAdded');
   let cards=Array.from(document.querySelectorAll('.card'));
 

   var selectedArr=[];
   var selectedButton=Array.from(buttonAdded.querySelectorAll('.added'));
          
          
          selectedButton.forEach(function(btn){
                var SelectedItem=btn.dataset.btn;
                console.log("Selected Item:",SelectedItem.textContent);
                   selectedArr= jobby.filter(function(j){
                   
                                  if((SelectedItem==j.role) || (SelectedItem==j.level)){
                                        
                                        return j;       
                                  }
                                  
                      })      
              });  */ 
              var selectedArr=[];
              addedButtonArray.forEach(function(addBtn){
                      console.log(addBtn) ;
                      var selectedItem=addBtn.dataset.btn;
                      selectedArr=jobby.map(function(softwareJob){
                          console.log('aaaaaaaaaaaaaaaa');
                              if(selectedItem==softwareJob.role || selectedItem==softwareJob.level || selectedItem==softwareJob.languages || selectedItem==softwareJob.tools)
                              {
                                      return softwareJob;
                              }
                      });
              });
              
             
            if(selectedArr===[]){
                      displayDataItems(selectedArr); 
                     
                      console.log("addedButtonArray",addedButtonArray);
                      
            }

            
         
  //const filterBtns = buttonAdded.querySelectorAll('.added');
  }  

  function hideCard(selectedCard){

  }
  


