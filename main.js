
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// counter user get element by clicking on enter 

function alclock(){
let endDate = document.getElementById("input_first")

let endDate_value = endDate.value

let till = document.getElementById("myElement").innerText = endDate_value;


// console.log(till)


const inputs = document.querySelectorAll(".inp");
function clock(){
    const end = new Date(endDate_value)
    const now = new Date()
    const diff = (end - now) / 1000 
    console.log(diff)
    inputs[0].value = Math.floor(diff / 3600 / 24)
    inputs[1].value = Math.floor(diff / 3600)
    inputs[2].value = Math.floor(diff /60)
    inputs[3].value = Math.floor(diff) % 60;



}
clock()

setInterval(
    ()=>{
        alclock()
    }, 1000
)
}









// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // mean goal heading inputs and changes 
let goal = document.getElementById("goal_id");
goal.addEventListener(
    "keyup",
    function(event){
        if(event.key == "Enter"){
            // console.log(this.value)
            addheading(this.value)
            this.value = ""
        }
        
    }
    )
    
function addheading(heading){
        
        let goalheading = document.getElementById("mainHea")

        goalheading.innerHTML = heading; 
}




// function vision(){
//  let visionGet = document.querySelector("fisrst_btn")
//  let VgetValue = visionGet.value

//  document.getElementById("mainHea").innerText = VgetValue;
// }
// vision()




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
