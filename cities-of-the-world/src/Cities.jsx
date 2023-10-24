import React from 'react'
import styles from './App.css';

function Cities({ selectedCountry }){

    const citiesData = [
        // Palestine
        {
          id: 1,
          name: "Jerusalem",
          country: "Palestine",
          info: "Jerusalem is the capital of Palestine and one of the oldest cities in the world.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfltMcxnFmD60YjNbvlm0iUGYtuJCQHMOa2A&usqp=CAU",
        },
        {
          id: 2,
          name: "Bethlehem",
          country: "Palestine",
          info: "Bethlehem is known for being the birthplace of Jesus and is a significant religious site.",
          image: "https://adminassets.devops.arabiaweather.com/sites/default/files/field/image/bayt%20lahm.jpg",
        },
        {
          id: 3,
          name: "Haifa",
          country: "Palestine",
          info: "Ramallah is the administrative capital of the Palestinian Authority.",
          image: "https://www.shutterstock.com/image-photo/haifa-israel-june-17-2018-260nw-1201184029.jpg",
        },
      
        // Syria
        {
          id: 4,
          name: "Damascus",
          country: "Syria",
          info: "Damascus is one of the oldest continuously inhabited cities in the world.",
          image: "https://cdn.britannica.com/91/177991-050-D8667CD8/Umayyad-Mosque-Damascus.jpg",
        },
        {
          id: 5,
          name: "Aleppo",
          country: "Syria",
          info: "Aleppo is known for its rich history and cultural significance.",
          image: "https://static01.nyt.com/images/2012/08/16/arts/CITADEL-JP1/CITADEL-JP1-superJumbo.jpg",
        },
        {
          id: 6,
          name: "Homs",
          country: "Syria",
          info: "Homs is an ancient city with a diverse cultural heritage.",
          image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/02/21/74/ce/filename-habebe-12810711874.jpg?w=600&h=400&s=1",
        },
      
        // Tunisia
        {
          id: 7,
          name: "Tunis",
          country: "Tunisia",
          info: "Tunis is the capital of Tunisia and known for its historic medina.",
          image: "https://example.com/tunis.jpg",
        },
        {
          id: 8,
          name: "Sousse",
          country: "Tunisia",
          info: "Sousse is a coastal city known for its beautiful beaches and historical sites.",
          image: "https://example.com/sousse.jpg",
        },
        {
          id: 9,
          name: "Djerba",
          country: "Tunisia",
          info: "Djerba is an island known for its resorts and cultural attractions.",
          image: "https://example.com/djerba.jpg",
        },
      ];

      const filteredCities = citiesData.filter((city) => city.country === selectedCountry);

      return (
        <div className="flex flex-col justify-center items-center flex-wrap">  
          <h2 className="mt-14 mb-8">Cities in {selectedCountry}</h2>
          <div className="grid grid-cols-3 gap-3  items-center " >
            {filteredCities.map((city) => (    
<div class=" max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-80">
    <a href="#">
        <img class="rounded-t-lg w-80 h-44" src={city.image} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{city.name}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{city.info}</p>

    </div>
</div>

            ))}
          </div>
        </div>
      );

}

export default Cities