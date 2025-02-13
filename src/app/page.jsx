import React from 'react';

const sampleData = [
  {
    id: 1,
    name: 'Strain : RS-11',
    description: 'RS11, also known as is a hybrid weed strain that Deo Farms made by crossing the OZ Kush project Pink Guava with a Sunset Sherbert. RS-11 was bred by Deo Farms of Oakland, CA, the maker of Zoap. RS-11 was selected by Wizard Trees of LA, along with RS-54 In 2023, many cultivators grow RS-11 across the US. RS-11 is a potent hybrid. Consumers who have smoked this strain report feeling calm, and sedated, but still mentally alert. The flavor profile is extra fruity with hints of sour citrus. RS11 flower provides a smooth smoke and a lingering sweet and spicy aroma. Medical marijuana patients say they smoke this strain when experiencing mild pain',
    price: 1099,
    img: '1.jpg',
    content: 'In 2023, many cultivators grow RS-11 across the US. RS-11 is a potent hybrid. Consumers who have smoked this strain report feeling calm, and sedated, but still mentally alert. The flavor profile is extra fruity with hints of sour citrus. RS11 flower provides a smooth smoke and a lingering sweet and spicy aroma. Medical marijuana patients say they smoke this strain when experiencing mild pain.'
  },
  {
    id: 2,
    name: 'Strain : Falcon 9',
    description: 'This indica-dominant strain from Exotic Genetix crosses Sunset Sherbert with Tina. Falcon 9 is noted for a smooth, gassy ice cream flavor profile that comes from dark purple buds accented by vibrant orange pistils. Meant for indica lovers, Falcon 9 is known to start as a strong head high before settling into the body. Patients report that it can help with chronic pain, depression, and PTSD.',
    price: 1870,
    img: '2.jpg',
    content: ''
  },
  {
    id: 3,
    name: 'Strain : Super Boof',
    description: 'Black Cherry Punch and Tropicana Cookies, and is Leafly Strain of the Year 2024. It has the same chunky, deep green and purple-dappled buds as its parents that look wet with silver calyxes. The effects of Super Boof are relaxing and giggly. Reviewers on Leafly say this strain makes them feel euphoric, creative and focused. Medical marijuana patients say they buy Super Boof for gastrointestinal disorders, depression, and fibromyalgia. Super Boof regularly tests at 28% THC. The dominant terpene is myrcene. The original breeder of the Super Boof strain is California’s Blockhead, who named it “Blockberry” in 2019. Michigan grower/influencer Mobilejay selected a variety and ironically named it Super Boof, popularizing it in 2021 and 2022. Super Boof consistently wins top honors in the flower and hash category, including back-to-back wins as ice water hash in The Ego Clash of 2023 and 2024.',
    price: 1870,
    img: '3.jpg',
    content: ''
  },
  {
    id: 4,
    name: 'Strain : White Truffle',
    description: 'White Truffle is an indica-dominant hybrid marijuana strain that is a type of Gorilla Butter. This strain produces a quick-hitting head high that will clear your mind of worry. Eventually, these effects can be felt throughout your body, leaving you in a relaxing trance. Consumers who have enjoyed White Truffle weed describe the high as "calming and slightly buzzy." This strain is best when enjoyed after a long day of work or during the evening hours to relax and unwind. White Truffle features a savory and earthy flavor profile accompanied by a mild skunky aroma. Medical marijuana patients choose White Truffle to relieve symptoms associated with stress and fatigue. White Truffle is dusted by frosty white trichomes and features dark brown hairs. It comes from the small breeder Fresh Coast Genetics in Michigan, although Parabellum Genetics has a strain of the same name. If youve smoked, dabbed, or consumed White Truffle cannabis before, tell us about your experience by leaving a review.',
    price: 1870,
    img: '4.jpg',
    content: ''
  },
  {
    id: 5,
    name: 'Strain : Cherry Berry',
    description: 'Cherry Burst is a hybrid weed strain made from a genetic cross between Cherry Cookie and Purple Bomb. This strain is 30% sativa and 70% indica. Cherry Burst is 1% THC, making this strain an ideal choice for experienced cannabis consumers. Bred by unknown breeders, the average price of Cherry Burst typically ranges from $10-$15 per gram. We are still learning about Cherry Burst’s effects, flavors, and medical uses. If you ve smoked, dabbed, or consumed Cherry Burst, please tell us about your experience by leaving a strain review',
    price: 1870,
    img: '5.jpg',
    content: ''
  },
  {
    id: 6,
    name: 'Strain : Miami',
    description: 'Miami Heat is a sativa weed strain made from a genetic cross between Miami Haze and Triple OG. This strain is a fiery and potent strain that will make you feel like you’re on the court with the famous basketball team. Miami Heat is 28-30% THC, making this strain an ideal choice for experienced cannabis consumers. Leafly customers tell us Miami Heat effects include cerebral, energetic, and focused. Medical marijuana patients often choose Miami Heat when dealing with symptoms associated with depression, fatigue, and pain. Bred by Allbud, Miami Heat features flavors like citrus, grape and sweet. The dominant terpene of this strain is myrcene. The average price of Miami Heat typically ranges from $40-$60 per eighth. If you’re looking for a strain that will make you feel cerebral, energetic, and focused, Miami Heat might be the one for you. This strain has a fruity and skunky flavor that will make your taste buds tingle and your mind race. If you’ve smoked, dabbed, or consumed Miami Heat, tell us about your experience by leaving a strain review.',
    price: 1870,
    img: '6.jpg',
    content: ''
  },
  {
    id: 7,
    name: 'Strain : Platinum Breath',
    description: 'Breeder In-House Genetics works the OG Kush Breath line with the Platinum Kush Breath weed strain. Platinum Kush Breath from In-House is Platinum x OGKB V2.1, so it looks like In-House is adding bling and stability to scruffy pungent OGKB—never a bad idea. Platinum is reportedly some old-school UW Hashplant x Permafrost. It s going to look amazing, smell like some muted hashy gas funk, and hit like an indica.',
    price: 1870,
    img: '7.jpg',
    content: ''
  },
  {
    id: 8,
    name: 'Strain : Joker Candy',
    description: 'Joker Candy is a hybrid marijuana strain. We re still learning about the flavors and effects of Joker s Web - if you ve smoked, dabbed, or consumed this strain before, tell us about it by leaving a review., also known as "Kandyland," is a sativa marijuana strain bred from Granddaddy Purple and Bay Platinum Cookies. Golden hairs weave through Candyland’s thick coat of sugar-like trichomes and highlight the compact, camouflage-colored buds. Patients turn to Candyland when trying to moderate pain, muscle tension, and sour moods. Candyland offers uplifting and stimulating effects, making it a perfect strain for social gatherings or creative pastimes.',
    price: 1870,
    img: '8.jpg',
    content: ' '
  },
  {
    id: 9,
    name: 'Strain : London Marker',
    description: 'London Marker is a hybrid weed strain made from a genetic cross between London Pound Cake and Permanent Marker. This strain is 50% sativa and 50% indica. London Marker is 20% THC, making this strain an ideal choice for experienced cannabis consumers. Bred by Seed Junky Genetics, the average price of London Marker typically ranges from $10-$15 per gram. We are still learning about London Marker’s effects, flavors, and medical uses. If you ve smoked, dabbed, or consumed London Marker, please tell us about your experience by leaving a strain review.',
    price: 1870,
    img: '9.jpg',
    content: ''
  },
  {
    id: 10,
    name: 'Strain : Ice Cream Cake',
    description: 'Ice Cream Cake is an Indica-dominant hybrid marijuana strain made by crossing Wedding Cake with Gelato #33. This strain offers sedating effects that leave your mind and body completely relaxed. Ice Cream Cake features a creamy flavor profile with sweet hints of vanilla and sugary dough. This strain is reported by medical marijuana patients and consumers to have calming effects that help with pain, sleep, and anxiety. Ice Cream Cake weed is ideal for night time use when you have nothing important to do except watch TV and fall asleep.',
    price: 1870,
    img: '10.jpg',
    content: ''
  },
  {
    id: 11,
    name: 'Strain : Runtz Bottom',
    description: 'Runtz Bottom, also known as "Runtz OG," is a rare type of  hybrid marijuana strain. Runtz is made by Cookies Fam by crossing  Zkittlez with Gelato and it is loved for its incredibly fruity flavor profile that smells just like a bag of the sugary candy we all know and love. Popularized by the Runtz crew helmed by Yung LB out of Long Beach, Runtz was named Leafly Strain of the Year in 2020. Runtz is celebrated for its creamy smoke that is smooth and welcoming. This strain of weed produces euphoric highs and uplifting effects that are known to be long-lasting. Purple Caper Seeds released the same cross under the name Gelato Zkittlez. Runtz is known by many names the world over including Zwirlz in the Netherlands. At least 20 variations of Runtz exist with many more to come.',
    price: 1870,
    img: '11.jpg',
    content: ''
  }
  


  

];

export default function Page() {
  return (
    <>

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>🍀Pattaya Thailand 📍From Pattaya Thailand 🇹🇭 Smoke Cannabis Yelly Gummy</title>

        <meta name="description" content="📢Pattaya Thailand 📍From Pattaya Thailand 🇹🇭 Smoke Cannabis Yelly Gummy PACKMAN.PACKWOODS.MUHAEDS.SOIL2OIL.DABWOODS. PUFFLA. FRYD"/>

        <meta name="keywords" content="Pattaya, Thailand, Smoke Cannabis, Gummy, Yelly, Smoke,Cannabis"/>

        <meta property="og:title" content="Pattaya Thailand 📍From Pattaya Thailand 🇹🇭 Smoke Cannabis Yelly Gummy" />

        <meta property="og:description" content="📢Pattaya Thailand 📍From Pattaya Thailand 🇹🇭 Smoke Cannabis Yelly Gummy PACKMAN.PACKWOODS.MUHAEDS.SOIL2OIL.DABWOODS. PUFFLA. FRYD"/>
        
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />

        <meta property="og:image" content="/img/logo.png"/>

        <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />



      
      <header className="bg-primary text-white text-center py-5  ">
     
        <div className="container">
        
          
        </div>

        <div className="line">
       
        </div>
      </header>

      
      <section className="container text-center my-2">
      
      <img src="/img/logo.png" className='logo mb-3' width={70} alt="" /> <br />
      <a href="https://lin.ee/5I96lieq"><img src="https://scdn.line-apps.com/n/line_add_friends/btn/th.png" alt="เพิ่มเพื่อน" height="36" border="0"/></a>
       
        <div className="alert alert-success mt-3">
          📢 <strong>Pattaya Thailand</strong>  📍From Pattaya Thailand 🇹🇭 Smoke Cannabis Yelly Gummy PACKMAN.PACKWOODS.MUHAEDS.<br/> SOIL2OIL.DABWOODS. PUFFLA. FRYD
        </div>
        <div className="alert alert-info">
        ☘️ Delicious, quality  Shipping worldwide 🌿🍀 Dm now !!
        </div>
      </section>

    
      <div className="container my-5">
        <h1 className="text-center mb-4">HIGH WORLD 420 CANNABIS</h1>
        <div className="row">
     
          {sampleData.map((product) => (
           
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card h-100 shadow-sm">
          
                <img
                  src={`/img/${product.img}`}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: '250px', objectFit: 'cover' }}
                />
           
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                 
                </div>
              
                <div className="card-footer text-center">
              
             
                <a href="https://lin.ee/5I96lieq"><img src="https://scdn.line-apps.com/n/line_add_friends/btn/th.png" alt="เพิ่มเพื่อน" height="36" border="0"/></a>
                </div>
              </div>
            </div>

          ))}
        </div>
      </div>

   
   










      <footer className="bg-dark text-white text-center py-4">
        <div className="container">
          <p className="mb-0">
            © 2025 ร้านค้า - HIGH WORLD 420
          </p>
          <p>
            ติดต่อเรา:0804165428 | อีเมล: | Facebook: <a href="https://www.facebook.com/meedee88shopping/" className="text-white"></a>
          </p>
        </div>
      </footer>
    </>
  );
}
