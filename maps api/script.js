function initMap() {
  const markersArray = [];

  const renderShops = () => {
    shopPass.forEach(({ position, label }) => {
      const marker = new google.maps.Marker({
        position: position,
        map,
        label: {
          text: label,
          className: "marker-label",
        },
      });
      markersArray.push(marker);
    });
  };

  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 51.52504, lng: 0.10666 },
    zoom: 13,
    mapId: "d0ea8adafb1d9544",
  });
  new google.maps.Marker({
    position: {
      lat: 51.52504,
      lng: 0.10666,
    },
    map,
    label: {
      text: "Bakery",
      className: "marker-label",
    },
  });

  renderBtn.addEventListener("click", () => {
    markersArray.forEach((marker) => marker.setMap(null));
    renderShops();
  });
  renderShops();
}

function createCheckBox(name, id, parent) {
  const label = document.createElement("label");
  label.setAttribute("for", id);
  label.innerText = name;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = id;
  checkbox.value = id;

  checkbox.addEventListener("change", (e) => {
    console.log("checkbox change event");
    const isChecked = e.target.checked;
    if (isChecked) {
      const id = e.target.value;
      const shopToAdd = shops.find((shop) => shop.id === id);
      shopPass.push(shopToAdd);
    } else {
      shopPass = shopPass.filter((shop) => shop.id !== id);
    }
  });

  parent.append(label);
  parent.append(checkbox);
}

function createSection(name, parent) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("section");

  const section = document.createElement("h2");
  section.innerText = name;
  const sectionShops = document.createElement("div");
  sectionShops.classList.add("section-shops");

  wrapper.append(section);
  wrapper.append(sectionShops);

  parent.append(wrapper);

  return sectionShops;
}

function populateShops(parent, shops) {
  const sections = [];
  shops.forEach(({ label, id, category }) => {
    const sectionIncluded = sections.some(
      (section) => section.name === category
    );
    if (!sectionIncluded) {
      sections.push({
        name: category,
        ref: createSection(category, parent),
      });
    }
    const name = label.slice(0, label.indexOf("("));
    const checkboxParent = sections.find((item) => item.name === category).ref;
    createCheckBox(name, id, checkboxParent);
  });
}

const shopsElement = document.getElementById("shops");
const renderBtn = document.getElementById("render-btn");
const restartBtn = document.getElementById("restart-btn");

restartBtn.addEventListener("click", restart);

let shopPass = [];

const shops = [
  {
    position: {
      lat: 51.536282,
      lng: 0.08148,
    },
    label: "TST ir Mixas 1 (7AM ir 9AM)",
    category: "Barking",
    id: "b4f1133e-99c7-4565-97d4-fcb1b84533de",
  },
  {
    position: {
      lat: 51.5270117585448,
      lng: 0.11370143429164127,
    },
    label: "Meat 2 Veg (7AM)",
    category: "Barking",
    id: "b4f1133easdasd-99csd7-4565-97d4d-fcb1b84533de",
  },
  {
    position: {
      lat: 51.5600539612002,
      lng: 0.07697462719481207,
    },
    label: "EDESA IL (9AM)",
    category: "Ilford",
    id: "7f2c4d6c-7c87-4003-af60-1c9a05f9d52a",
  },
  {
    position: {
      lat: 51.55874488076029,
      lng: 0.13060350184913586,
    },
    label: "Brukne (9AM)",
    category: "Dagenham",
    id: "6013a69b-1911-4034-bb28-f690a33de234",
  },
  {
    position: {
      lat: 51.534680108151385,
      lng: 0.14852108122847588,
    },
    label: "VIDA D (9AM)",
    category: "Dagenham",
    id: "640f582f-855c-43c7-8102-a60fe32bca69",
  },
  {
    position: {
      lat: 51.54169647318953,
      lng: 0.11429987116440919,
    },
    label: "DnI (9AM)",
    category: "Dagenham",
    id: "57312189-29ac-4127-9b89-1436a8f1ac93",
  },
  {
    position: {
      lat: 51.55148599094532,
      lng: 0.11498363546168557,
    },
    label: "CKAZKA ir NIDA (10AM)",
    category: "Dagenham",
    id: "d8f4c5a0-5903-4c31-ad81-3101140a7c08",
  },
  {
    position: {
      lat: 51.55212137540501,
      lng: 0.13186772719458614,
    },
    label: "Smilga (10AM)",
    category: "Dagenham",
    id: "6f281f78-1d59-4934-bc0d-0f18fd30c15f",
  },
  {
    position: {
      lat: 51.55450614275526,
      lng: 0.14235317137259046,
    },
    label: "Linas (7:30AM)",
    category: "Dagenham",
    id: "5c0a22aa-211e-4d20-a77c-5e1161db03ec",
  },
  {
    position: {
      lat: 51.572291829043664,
      lng: 0.1402317644630039,
    },
    label: "TAV (A) (9AM)",
    category: "Romford",
    id: "b7ce716b-fd51-4b61-aefa-156ea74301ae",
  },
  {
    position: {
      lat: 51.5390477411,
      lng: 0.12829227116440917,
    },
    label: "DIZZ (7AM)",
    category: "Dagenham",
    id: "0ca1e81f-02f4-4ce7-902c-3da0357b72e3",
  },
  {
    position: {
      lat: 51.57601682871883,
      lng: 0.06593212351930894,
    },
    label: "ADL ir Armada (10AM)",
    category: "Ilford",
    id: "b1a2d8ef-d833-42b2-8d64-5cd281ab8e75",
  },
  {
    position: {
      lat: 51.56465023669837,
      lng: 0.09883005755024903,
    },
    label: "Gabieasy (10AM)",
    category: "Ilford",
    id: "bdcdf1e0-5399-4824-9357-941509dc0990",
  },
  {
    position: {
      lat: 51.56407766065654,
      lng: 0.11051484253728391,
    },
    label: "Azuolas (10AM)",
    category: "Ilford",
    id: "5d189467-7bad-4ea5-99e9-5e480f1a1805",
  },
  {
    position: {
      lat: 51.551410663574416,
      lng: 0.15506961185220763,
    },
    label: "Manija (10AM)",
    category: "Dagenham",
    id: "eecf964a-492f-4570-92f5-f7f9a9145ab0",
  },
  {
    position: {
      lat: 51.57159273679547,
      lng: 0.1337720050766345,
    },
    label: "Aguona R (10AM)",
    category: "Romford",
    id: "226b27dd-8b35-440c-872e-0d2efa69a346",
  },
  {
    position: {
      lat: 51.58097532259859,
      lng: 0.17766630205807404,
    },
    label: "Mixas R (9AM)",
    category: "Romford",
    id: "c7edde18-33c7-4f34-ab9f-fcc8fe6431c0",
  },
  {
    position: {
      lat: 51.59952559365755,
      lng: 0.162767411853566,
    },
    label: "Valentino Deli (9AM, Sat 10AM)",
    category: "Romford",
    id: "0ba38aa7-b734-479e-8eb0-4710239e0380",
  },
  {
    position: {
      lat: 51.47623389134062,
      lng: 0.3361095676721103,
    },
    label: "EuropeEx Grays (9AM)",
    category: "Grays",
    id: "9a3d755b-7e3d-46e6-bb39-6f8cced39b7b",
  },
  {
    position: {
      lat: 51.47940503543509,
      lng: 0.27412056767221155,
    },
    label: "Pelene (10AM)",
    category: "Grays",
    id: "da206d34-382a-4979-8db6-8547c6945043",
  },
  {
    position: {
      lat: 51.59160594135649,
      lng: 0.08341200940458889,
    },
    label: "Dovydas (9AM)",
    category: "Ilford",
    id: "c026a5d5-95bb-4c62-83a0-fd1062bb8f95",
  },
  {
    position: {
      lat: 51.600835112645726,
      lng: 0.08464892534684001,
    },
    label: "Meduolis (10AM)",
    category: "Ilford",
    id: "e4f3afdd-6bdf-4822-ba5d-fef7bd18fb9e",
  },
  {
    position: {
      lat: 51.57621892113497,
      lng: 0.09470256952405832,
    },
    label: "SET Market (11AM)",
    category: "Ilford",
    id: "959e9180-1a1f-40ce-af51-4762570e0bd1",
  },
  {
    position: {
      lat: 51.56078353883269,
      lng: 0.1470533848660241,
    },
    label: "Edesa D (10AM)",
    category: "Dagenham",
    id: "52bd0fa3-2180-4572-8084-0259b8569cd9",
  },
  {
    position: {
      lat: 51.574577710073214,
      lng: 0.1853477002087695,
    },
    label: "Stumbras (10AM)",
    category: "Romford",
    id: "3e198073-8985-4ab0-8154-3f43702f6573",
  },
  {
    position: {
      lat: 51.56329990850877,
      lng: 0.10978705664180141,
    },
    label: "Arges (7AM)",
    category: "Ilford",
    id: "ee9ed9e8-b8b0-4078-a4cd-5c1402156c75",
  },
  {
    position: {
      lat: 51.56108776811107,
      lng: 0.09807998301688438,
    },
    label: "Magija (11AM)",
    category: "Ilford",
    id: "81799d96-0407-44a7-b11f-25afeab9f1ea",
  },
  {
    position: {
      lat: 51.60799042937077,
      lng: 0.035708283018194356,
    },
    label: "Riesutelis (9AM, Sat 10AM)",
    category: "Ilford",
    id: "92fe1dc2-fa12-4ec4-96fb-5791b1c16d08",
  },
  {
    position: {
      lat: 51.53555368361109,
      lng: 0.09464465767118167,
    },
    label: "Aciu (10AM)",
    category: "Barking",
    id: "45d68419-45dd-4836-a4f5-deac5a53f703",
  },
  {
    position: {
      lat: 51.569560790373046,
      lng: 0.4570102425374256,
    },
    label: "Delicatessen Basildon (9AM)",
    category: "Grays",
    id: "9d16ad35-5fc5-48fc-b034-7bab3d95c1de",
  },
  {
    position: {
      lat: 51.53269674812012,
      lng: 0.09110932883559085,
    },
    label: "Londis (7AM)",
    category: "Barking",
    id: "1b47e8e3-2ce0-43b2-b872-39c13878e05c",
  },
  {
    position: {
      lat: 51.602899910343105,
      lng: 0.0874206137028091,
    },
    label: "Vida Hainault (11AM)",
    category: "Ilford",
    id: "0ac5e956-32f5-4713-869c-0bcabce351ea",
  },
  {
    position: {
      lat: 51.537383277843595,
      lng: 0.07919382883559081,
    },
    label: "Lituanica Barking (8AM)",
    category: "Barking",
    id: "4e9e506a-8154-4ee7-8276-3a2722cecad9",
  },
  {
    position: {
      lat: 51.549559326522015,
      lng: 0.19917101370126244,
    },
    label: "Camilla (10AM)",
    category: "Romford",
    id: "8cabd863-0eb3-4035-bd66-5c2758270ad6",
  },
  {
    position: {
      lat: 51.53620820369798,
      lng: 0.1512994118517791,
    },
    label: "Gerule (10AM)",
    category: "Dagenham",
    id: "071737f4-93c9-45bb-99a9-eb8618580093",
  },
  // SEPERATOR
  {
    position: {
      lat: 51.519033153369755,
      lng: 0.06423809849659749,
    },
    label: "Asorti (7 AM)",
    category: "Beckton",
    id: "5cd734a8-2d3d-496e-b7cb-fada340d42e0",
  },
  {
    position: {
      lat: 51.50102764143811,
      lng: 0.029965152217479203,
    },
    label: "ERZA (9 AM)",
    category: "Beckton",
    id: "5cd724a8-2d3d-4936e-c2sb-fada340d42e0",
  },
  {
    position: {
      lat: 51.51652367918531,
      lng: 0.06274492727592884,
    },
    label: "Lituanica Beckton (7 AM)",
    category: "Beckton",
    id: "70dc4a9a-c865-4975-8f4b-5f76b3be54ce",
  },
  {
    position: {
      lat: 51.51222077491266,
      lng: 0.03258088471361335,
    },
    label: "Jays ir MHS (7 AM)",
    category: "Beckton",
    id: "1c5b2b72-7c7c-4c5f-aacd-c2ff19088f3d",
  },
  {
    position: {
      lat: 51.514688351470724,
      lng: 0.03161479723292975,
    },
    label: "SRA (7 AM)",
    category: "Beckton",
    id: "7f6d7500-a325-42a5-9c4e-7699ef43940a",
  },
  {
    position: {
      lat: 51.51586541601097,
      lng: 0.01908659993788305,
    },
    label: "Nemunas (9 AM)",
    category: "Canning Town",
    id: "84dce692-d2c1-4383-9b6f-32b9565e6709",
  },
  {
    position: {
      lat: 51.51264296263158,
      lng: 0.010687113492734771,
    },
    label: "Pelene (9 AM)",
    category: "Canning Town",
    id: "1fb79805-6335-4126-b783-03db4800b956",
  },
  {
    position: {
      lat: 51.5092149312687,
      lng: -0.0019969359519052252,
    },
    label: "Virginia Quay (7 AM)",
    category: "Canary",
    id: "9ac4a29f-73a0-4813-9441-7cff116d22d7",
  },
  {
    position: {
      lat: 51.496711806937,
      lng: -0.00920984251199654,
    },
    label: "Nisa Local (7 AM) Isle of Dogs",
    category: "Canary",
    id: "4f712b7f-8aa5-4b0f-b14e-5fb01f959805",
  },
  {
    position: {
      lat: 51.51641545592356,
      lng: 0.008910956248254985,
    },
    label: "Alenka (10 AM)",
    category: "Canning Town",
    id: "1265be81-7b4e-42f1-8b64-91ff3675b3a8",
  },
  {
    position: {
      lat: 51.5251157760502,
      lng: 0.010840004381815871,
    },
    label: "Firat (7 AM)",
    category: "Plaistow",
    id: "755d5acf-33a0-421e-bc19-714415fe6fc6",
  },
  {
    position: {
      lat: 51.541369063269876,
      lng: 0.0009585371222730967,
    },
    label: "Lituanica Stratford (7 AM)",
    category: "Stratford",
    id: "39cbc39a-ea1c-4ef4-95e8-a08ca7d500fb",
  },
  {
    position: {
      lat: 51.52241232266689,
      lng: -0.0337164134907459,
    },
    label: "Gabija 2 (10 AM)",
    category: "Mile End",
    id: "226d3d57-da37-4c7c-9081-eae5a0254205",
  },
  {
    position: {
      lat: 51.533642862582404,
      lng: -0.057091357242010164,
    },
    label: "Mama Nasha 1 (10 AM)",
    category: "Mile End",
    id: "418d49f2-2a77-476f-a812-0693475975d8",
  },
  {
    position: {
      lat: 51.58351667557115,
      lng: -0.032417945317817304,
    },
    label: "Baltika W (10 AM)",
    category: "Walthamstow",
    id: "f31d0979-b964-49cf-a265-e8e0068ee1be",
  },
  {
    position: {
      lat: 51.58204158217422,
      lng: -0.03257580142278221,
    },
    label: "Lituanica W (7 AM)",
    category: "Walthamstow",
    id: "caa6268f-2669-48b3-b1e2-fcccc71c8d11",
  },
  {
    position: {
      lat: 51.58139001748572,
      lng: -0.018147684222196148,
    },
    label: "Pas Virginia (10 AM)",
    category: "Walthamstow",
    id: "11bdf71a-e81c-4007-be7f-831eb96f5f11",
  },
  {
    position: {
      lat: 51.57464547016582,
      lng: -0.010928428404480215,
    },
    label: "Alytus (10 AM)",
    category: "Walthamstow",
    id: "fc72f780-3d53-4bd1-96c7-cf61349028dc",
  },
  {
    position: {
      lat: 51.57156767360012,
      lng: -0.00860783025948494,
    },
    label: "USSR Leyton (11 AM)",
    category: "Walthamstow",
    id: "6546051e-c62a-4c60-a2ba-91851344422c",
  },
  {
    position: {
      lat: 51.55960740274356,
      lng: -0.00875552146292184,
    },
    label: "777 [4] (10 AM)",
    category: "Leyton",
    id: "4608d259-c4d9-4ae1-9870-8b15c1a69d76",
  },
  {
    position: {
      lat: 51.560763588730225,
      lng: -0.0010005167690541274,
    },
    label: "Dhillan (8:30 AM)",
    category: "Leyton",
    id: "b43637ce-b439-4a92-a623-fff5d84a5cc9",
  },
  {
    position: {
      lat: 51.56810795060723,
      lng: 0.008499669740414054,
    },
    label: "Sala (10 AM)",
    category: "Leyton",
    id: "5e3fef6b-6b39-406d-94b3-ec6a51390ddf",
  },
  {
    position: {
      lat: 51.54825808455467,
      lng: 0.005473257739161535,
    },
    label: "Maxi Straford (8 AM)",
    category: "Stratford",
    id: "3113af4c-d938-488f-bc5a-2654364cf54c",
  },
  {
    position: {
      lat: 51.549893153830794,
      lng: 0.02438801392200512,
    },
    label: "Vasara 2 (10 AM)",
    category: "Stratford",
    id: "4529e040-7779-4e5d-811e-65e6e365ccf0",
  },
  {
    position: {
      lat: 51.52385292250563,
      lng: 0.030579579395827505,
    },
    label: "Vasara 1/Ckazka (10 AM)",
    category: "Plaistow",
    id: "5ae14e5c-5719-44a0-aacf-6df349f09c50",
  },
  {
    position: {
      lat: 51.548221415606356,
      lng: 0.0395481274127189,
    },
    label: "777 [1] (10 AM)",
    category: "East Ham",
    id: "d38d0dc0-d468-4151-88b7-f784b9f3e600",
  },
  {
    position: {
      lat: 51.551693220236906,
      lng: 0.05049442741281176,
    },
    label: "Best Food (10 AM)",
    category: "East Ham",
    id: "271d1844-abfe-4ef7-86c8-05ae770a3e2d",
  },
  {
    position: {
      lat: 51.54040164484747,
      lng: 0.05126370437250743,
    },
    label: "Manija 1 / BRASKE (10 AM)",
    category: "East Ham",
    id: "e8b395be-eeee-4d7a-b864-fd5a288a5c18",
  },
  {
    position: {
      lat: 51.524193535401814,
      lng: 0.039620383229960573,
    },
    label: "Lonsdale (7 AM)",
    category: "Plaistow",
    id: "95acdce2-a01f-4599-ac9e-add0249d44af",
  },
  {
    position: {
      lat: 51.5266627788222,
      lng: 0.030576481375099402,
    },
    label: "OHO 2 (10 AM)",
    category: "Plaistow",
    id: "6853bbe2-8304-48d3-bc49-dd813c5e87bb",
  },
  {
    position: {
      lat: 51.52011912855394,
      lng: 0.017222113552759134,
    },
    label: "Albina (1 PM)",
    category: "Canning Town",
    id: "5a4cb822-a235-4f59-b399-6ab899a00fbc",
  },
  {
    position: {
      lat: 51.51117477870606,
      lng: 0.032602985084552276,
    },
    label: "Alex (10 AM)",
    category: "Beckton",
    id: "76872c13-fe4e-4e96-860d-e37a1126c7fb",
  },
  {
    position: {
      lat: 51.501041941320935,
      lng: 0.07278614609401172,
    },
    label: "Unique ir Zainab (11AM ir 9AM)",
    category: "Beckton",
    id: "7b4b35fb-9fcd-45a8-a952-fa6ae233687e",
  },
  {
    position: {
      lat: 51.50695564731695,
      lng: 0.07262411577578695,
    },
    label: "RS (8 AM)",
    category: "Beckton",
    id: "b8981753-303a-46dd-9d74-77e79bfbd365",
  },
  {
    position: {
      lat: 51.60503177302093,
      lng: -0.014402597218662565,
    },
    label: "Taura (10 AM)",
    category: "Walthamstow",
    id: "1bf88b9c-2b3d-4219-94a7-2a5d364ae4e3",
  },
  {
    position: {
      lat: 51.546796020188005,
      lng: 0.04863415767283606,
    },
    label: "TAV Eastham (7 AM)",
    category: "East Ham",
    id: "82d55318-aa6f-4517-be93-ca7aa1bf68cb",
  },
  {
    position: {
      lat: 51.5418899834001,
      lng: 0.03791027272555558,
    },
    label: "Provincija (10 AM)",
    category: "East Ham",
    id: "822324318-aa6f-451222-be93-ca7aa1bf68cb",
  },
  {
    position: {
      lat: 51.544631795017466,
      lng: 0.015747767164308164,
    },
    label: "Vika (10 AM)",
    category: "Stratford",
    id: "0cd3f605-da0f-4625-b57d-f13f0298638e",
  },
  {
    position: {
      lat: 51.60319046395371,
      lng: -0.19089462396813525,
    },
    label: "TST Food Finchley (10 AM)",
    category: "Finchley",
    id: "50749b48-ab1a-461c-9ca0-5267e4f0536d",
  },
  {
    position: {
      lat: 51.58210771778087,
      lng: -0.158560170731436,
    },
    label: "Dacha Finchley (10 AM)",
    category: "Finchley",
    id: "83a8406a-e41d-44bd-970e-31c758fe0f03",
  },
  {
    position: {
      lat: 51.525889155538444,
      lng: 0.05656986973925011,
    },
    label: "Taupyk (10 AM)",
    category: "Plaistow",
    id: "7f0bd3a2-fc81-4183-82ea-1530463a1c98",
  },
];

populateShops(shopsElement, shops);
const checkboxes = shopsElement.querySelectorAll('input[type="checkbox"');

function restart() {
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      const event = new Event("change");
      checkbox.checked = false;
      checkbox.checked = true;
      checkbox.dispatchEvent(event);
    }
  });
}
