import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import LineChart from "./Charts/LineChart";
import logo from "./assets/letter-v.png"
import { StateLeadHome } from "./state-lead/StateLeadHome";
import Home from "./components/Home";
import Investors from "./investors/Investors";


export function MainNav(){

  function checkIfSector(){

    console.log("Inside checkIfSector");
    console.log(document.getElementById("select_dropdown").value);

    if(document.getElementById("select_dropdown").value === "sector"){
      
      console.log("Sector");
      document.getElementById("select_sector").disabled = false;
      
      document.getElementById("select_state").style = "display:none";
      document.getElementById("state_label").style = "display:none";
      document.getElementById("select_sector").style = "display:block";
      document.getElementById("sector_label").style = "display:block";
    }
    else if(document.getElementById("select_dropdown").value === "state"){
      
      document.getElementById("select_state").disabled = false;
      document.getElementById("select_sector").style = "display:none";
      document.getElementById("sector_label").style = "display:none";
      document.getElementById("select_state").style = "display:block";
      document.getElementById("state_label").style = "display:block";
    }

  }

  function getQuote() {
    if(document.getElementById("select_dropdown").value === "sector"){
      if(document.getElementById("select_sector").value === "automotive"){
        return "Automotive sector quote goes here";
    }


  }
   else if(document.getElementById("select_dropdown").value === "state"){
      if(document.getElementById("select_state").value === "andaman_nicobar"){
        navigate('/state-lead/1');
    }
      if(document.getElementById("select_state").value === "andhra_pradesh"){
        navigate('/state-lead/2');
    }
      if(document.getElementById("select_state").value === "arunachal"){
        navigate('/state-lead/3');
    }
    if(document.getElementById("select_state").value === "assam"){
      navigate('/state-lead/4');
  }
  if(document.getElementById("select_state").value === "bihar"){
    navigate('/state-lead/5');
}
if(document.getElementById("select_state").value === "chandigarh"){
  navigate('/state-lead/6');
}
if(document.getElementById("select_state").value === "chattisgarh"){
  navigate('/state-lead/7');
}
if(document.getElementById("select_state").value === "dadra"){
  navigate('/state-lead/8');
}
if(document.getElementById("select_state").value === "delhi"){
  navigate('/state-lead/9');
}
if(document.getElementById("select_state").value === "goa"){
  navigate('/state-lead/10');
}
if(document.getElementById("select_state").value === "gujarat"){
  navigate('/state-lead/11');
}
if(document.getElementById("select_state").value === "haryana"){
  navigate('/state-lead/12');
}
if(document.getElementById("select_state").value === "himachal"){
  navigate('/state-lead/13');
}
if(document.getElementById("select_state").value === "jammu"){
  navigate('/state-lead/14');
}
if(document.getElementById("select_state").value === "jharkhand"){
  navigate('/state-lead/15');
}
if(document.getElementById("select_state").value === "karnataka"){
  navigate('/state-lead/16');
}
if(document.getElementById("select_state").value === "kerala"){
  navigate('/state-lead/17');
}
if(document.getElementById("select_state").value === "ladakh"){
  navigate('/state-lead/18');
}
if(document.getElementById("select_state").value === "lakshadweep"){
  navigate('/state-lead/19');
}
if(document.getElementById("select_state").value === "mp"){
  navigate('/state-lead/20');
}
if(document.getElementById("select_state").value === "maharashtra"){
  navigate('/state-lead/21');
}
if(document.getElementById("select_state").value === "manipur"){
  navigate('/state-lead/22');
}
if(document.getElementById("select_state").value === "meghalaya"){
  navigate('/state-lead/23');
}
if(document.getElementById("select_state").value === "mizoram"){
  navigate('/state-lead/24');
}
if(document.getElementById("select_state").value === "nagaland"){
  navigate('/state-lead/25');
}
if(document.getElementById("select_state").value === "odisha"){
  navigate('/state-lead/26');
}
if(document.getElementById("select_state").value === "puducherry"){
  navigate('/state-lead/27');
}
if(document.getElementById("select_state").value === "punjab"){
  navigate('/state-lead/28');
}
if(document.getElementById("select_state").value === "rajasthan"){
  navigate('/state-lead/29');
}
if(document.getElementById("select_state").value === "sikkim"){
  navigate('/state-lead/30');
}
if(document.getElementById("select_state").value === "tamil_nadu"){
  navigate('/state-lead/31');
}
if(document.getElementById("select_state").value === "telangana"){
  navigate('/state-lead/32');
}
if(document.getElementById("select_state").value === "tripura"){
  navigate('/state-lead/33');
}
if(document.getElementById("select_state").value === "up"){
  navigate('/state-lead/34');
}
if(document.getElementById("select_state").value === "uttarakhand"){
  navigate('/state-lead/35');
}
if(document.getElementById("select_state").value === "west_bengal"){
  navigate('/state-lead/36');
}


  }
}
  const navigate = useNavigate();
  const changePage = ()=>{
    navigate('Login')
  }

    return(
        <>
        

<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={logo} class="h-8 animate-pulse" alt="VentureVue" />
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white ">VentureVue</span>
  </a>
  <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button onClick={changePage} type="button" class="text-white bg-gradient-to-r from-purple-500 to-blue-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-4">Get started</button>

      <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" type="button" class="text-white bg-gradient-to-r from-purple-500 to-blue-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Explore</button>

      {/* Modal code */}
      <div id="authentication-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-md max-h-full">
        {/* <!-- Modal content --> */}
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Get quote on your product
                </h3>
                <button type="button" class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            {/* <!-- Modal body --> */}
            <div class="p-4 md:p-5">
                <form class="space-y-4" action="#">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Search By</label>
                        <select onChange={checkIfSector} id="select_dropdown" name="dropdown"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-400" type="button" required >Select..<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>
<option id="select1" value="select">Select</option>
<option id="sector" value="sector">Sector</option>
<option id="state" value="state">State</option>
</select>

                    </div>
                    <div>
                        <label for="sector" id="sector_label" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sector</label>
                        <select disabled id="select_sector" name="select_sector" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-400" type="button" required >Select..<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>
<option id="select2" value="select">Select</option>
<option id="automotive" value="automotive">Automotive</option>
<option id="energy" value="energy">Energy</option>
<option id="entertainment" value="entertainment">Entertainment</option>
<option id="finance" value="finance">Finance</option>
<option id="dining" value="dining">Dining</option>
<option id="healthcare" value="healthcare">Healthcare</option>
<option id="real_estate" value="real_estate">Real Estate</option>
<option id="legal_services" value="legal_services">Legal Services</option>
<option id="retail" value="retail">Retail</option>
<option id="technology" value="technology">Technology</option>
<option id="tourism" value="tourism">Tourism</option>
</select>
                    </div>
                    <div>
                        <label id="state_label" for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">State</label>
                        <select disabled id="select_state"
                        name="select_state" data-dropdown-toggle="dropdown" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-400" type="button" required >Select..<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>
<option id="select3" value="select">Select</option>
<option id="andhra_pradesh" value="andhra_pradesh">Andhra Pradesh</option>
<option id="andaman_nicobar" value="andaman_nicobar">Andaman and Nicobar Islands</option>
<option id="arunachal" value="arunachal">Arunachal Pradesh</option>
<option id="assam" value="assam">Assam</option>
<option id="bihar" value="bihar">Bihar</option>
<option id="chandigarh" value="chandigarh">Chandigarh</option>
<option id="chattisgarh" value="chattisgarh">Chhattisgarh</option>
<option id="dadra" value="dadra">Dadra and Nagar Haveli and Daman & Diu</option>
<option id="delhi" value="delhi">Delhi</option>
<option id="goa" value="goa">Goa</option>
<option id="gujarat" value="gujarat">Gujarat</option>
<option id="haryana" value="haryana">Haryana</option>
<option id="himachal" value="himachal">Himachal Pradesh</option>
<option id="jammu" value="jammu">Jammu & Kashmir</option>
<option id="jharkhand" value="jharkhand">Jharkhand</option>
<option id="karnataka" value="karnataka">Karnataka</option>
<option id="kerala" value="kerala">Kerala</option>
<option id="ladakh" value="ladakh">Ladakh</option>
<option id="lakshadweep" value="lakshadweep">Lakshadweep</option>
<option id="mp" value="mp">Madhya Pradesh</option>
<option id="maharashtra" value="maharashtra">Maharashtra</option>
<option id="manipur" value="manipur">Manipur</option>
<option id="meghalaya" value="meghalaya">Meghalaya</option>
<option id="mizoram" value="mizoram">Mizoram</option>
<option id="nagaland" value="nagaland">Nagaland</option>
<option id="odisha" value="odisha">Odisha</option>
<option id="puducherry" value="puducherry">Puducherry</option>
<option id="punjab" value="punjab">Punjab</option>

<option id="rajasthan" value="rajasthan">Rajasthan</option>
<option id="sikkim" value="sikkim">Sikkim</option>
<option id="tamil_nadu" value="tamil_nadu">Tamil Nadu</option>
<option id="telangana" value="telangana">Telangana</option>
<option id="tripura" value="tripura">Tripura</option>
<option id="up" value="up">Uttar Pradesh</option>
<option id="uttarakhand" value="uttarakhand">Uttarakhand</option>
<option id="west_bengal" value="west_bengal">West Bengal</option>

</select>
                    </div>



                    <div class="flex justify-between">
                        <div class="flex items-start">
                            
                           
                        </div>
                       
                    </div>
                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={getQuote}>Get Quote</button>
                  
                </form>
            </div>
        </div>
    </div>
</div> 

{/* Modal code ends */}

      <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="#" class="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500" aria-current="page">Home</a>
      </li>
      <li>
        <Link to="state-lead" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">State</Link>
      </li>
      <li>
        <Link  to="investors" href={<Investors />} class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Investors</Link>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
<Outlet />
        
        </>
    )
}