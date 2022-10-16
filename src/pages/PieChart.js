import React,{useState, useEffect} from "react";
import '../App.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend,  Title} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend, Title);


function PieChart()
{
  const [Category, setCategory]= useState([]);
  const [Posts, setPosts]=useState([]);
  let count = [0,0,0,0,0]
  useEffect( ()=>{
    let getCategory=[];
    const getPosts=[];
   const getdata= async()=>{
     const reqData= await fetch("http://localhost:3000/posts");
     const resData= await reqData.json();
     console.log(resData);
     
     for(let i=0;i<resData.length;i++){
      if(resData[i].category==="Entertainment"){

        count[0]++
      } else if(resData[i].category==="Health & Fitness")
  
        count[4]++
        else if(resData[i].category==="Food")
     
        count[1]++
        else if(resData[i].category==="Technology")
        
        count[2]++

        else
       
        count[3]++
    }

    console.log("Count:",count)
     for(let i=0; i<resData.length; i++)
     {
      getCategory.push(resData[i].category);
      getPosts.push(resData[i].noOfPosts);
     } 
      getCategory = [...new Set(getCategory)] 
   console.log(getCategory)
     setCategory(getCategory);

     setPosts(count);
   }
 getdata();
  },[]);
    
    return(
        <React.Fragment>
           <div className='border border-transparent shadow-lg  mt-4 p-1 rounded-md  justify-between '>
            <div className="h-full w-full">
       {/*  <h1 className="mt-3 text-center">Posts with Category and Posts</h1> */}
            <div className="row">               
                <div className="col-md-5  ml-5 wht">
            <Doughnut
              // width={50}
              // height={50}

                data={{   
                                                  
                labels: Category,
                datasets: [
                    {
                      label: '# of posts',
                      data: Posts,
                      backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 109, 64, 0.6)',
                        'rgba(125, 169, 34, 0.8)',
                        'rgba(225, 99, 251, 0.3)',
                        'rgba(225, 99, 101, 0.4)',
                        
                      ],
                      borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 109, 64, 0.6)',
                        'rgba(125, 169, 34, 0.8)',
                        'rgba(225, 99, 251, 0.3)',
                        'rgba(225, 99, 101, 0.4)',                        
                      ],
                      borderWidth: 2,
                      hoverOffset:20
                    //  offset: [20,0,0,0,0,0,0,0,0,0]                     
                    },
                  ],
            }}

            options={{                 
                responsive: true,  
                //maintainAspectRatio: false,       
                plugins:{
                    title:{
                        fontSize: 30,
                       text:'Number of Posts/Category',
                        display: true ,
                        font:{ size:22}   
                    },
                    legend:{
                      labels:{
                        font:{size:13}
                      }
                    }                        
                 },                
               }}    
             />
            </div>
        </div>
        </div>
        </div>
    </React.Fragment>
    );

}
export default PieChart;