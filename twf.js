
flowers = ["Amaryllis", "Tulip", "Lily", "Rose", "Sunflower", "Peony"]
health = 5;
flower = [];
hairstyle = null;
personality = null;
appearance = null;
p1 = null;
counter = 0;

function generate_flowers(){
  temp = [...flowers];
  fl = [];
  result = "<p>";
  for(let i = 0; i<3; i++){
    a = Math.floor(Math.random()*(temp.length));
    fl[i] = temp[a];
    temp.splice(a, 1);
  }
  console.log(fl)
  flower_data = {
    "sentence" :["After #verb# through all the #adjective# flowers, you decide that you will sell "+fl[0]+", "+fl[1]+", and "+ fl[2]+".", "You #verb2# through the #adjective# flowers and "+fl[0]+", "+fl[1]+", and "+ fl[2]+" stood out to you.", "Today, you feel like selling "+fl[0]+", "+fl[1]+", and "+ fl[2]+"."],
    "verb": ["looking", "sifting", "exploring", "examining", "searching", "sorting", "inspecting"],
    "verb2": ["look", "sift", "explore", "examine", "search", "sort", "inspect"],
    "adjective": ["beautiful", "colorful", "fragrant", "delicate", "graceful", "cheerful", "radiant", "lovely", "elegant", "vibrant"],
    "origin" : ["#sentence#"]
  }
  result += grammars.GenerationSimple(flower_data);
  result += "</p>"
  io.write_into_element(result, "flowers")
}

function sell_flowers(){
  p1 = document.getElementById("p1_name").value
console.log(p1)
  hairstyle = document.querySelector('input[name="hairstyle"]:checked').value;
  personality = document.querySelector('input[name="personality"]:checked').value;
  appearance = document.querySelector('input[name="appearance"]:checked').value;
  f1 = document.getElementById("flower1");
  f2 = document.getElementById("flower2");
  f3 = document.getElementById("flower3");
  f4 = document.getElementById("flower4");
  f5 = document.getElementById("flower5");
  f6 = document.getElementById("flower6");
  if(f1.checked){
    flower.push(f1.value);
  }
  if(f2.checked){
    flower.push(f2.value);
  }
  if(f3.checked){
    flower.push(f3.value);
  }
  if(f4.checked){
    flower.push(f4.value);
  }
  if(f5.checked){
    flower.push(f5.value);
  }
  if(f6.checked){
    flower.push(f6.value);
  }
  customers = ["romantic", "event planner", "gift giver", "sympathy seeker", "interior decorator", "nature lover"];
  result = "<p>";
  a = Math.floor(Math.random()*(customers.length));
  b = Math.floor(Math.random()*(11));
  customer = customers[a];
  if (a == 0){
//     Romantics: These customers buy flowers to express love and affection to their significant others. 
//     (+2 to roll if you sell rose, +1 if you are romantic, +1 if your hair is long and wavy)
    if(flower.indexOf("Rose")!==-1){
      b+=2;
    }
    if(personality == "r"){
      b+=1;
    }
    if(hairstyle = "lw"){
      b+=1;
    }
  }
  if (a == 1){
//    (+2 if you sell Tulip, +1 if you dress casual elegant, +1 if your hair is short and clean
    if(flower.indexOf("Tulip")!==-1){
      b+=2;
    }
    if(appearance == "cas"){
      b+=1;
    }
    if(hairstyle = "sc"){
      b+=1;
    }
  }
  if (a == 2){
//    (+2 if you sell Peony, +1 if you are funny, +1 if you dress fashionable)
    if(flower.indexOf("Peony")!==-1){
      b+=2;
    }
    if(personality == "fu"){
      b+=1;
    }
    if(appearance = "fas"){
      b+=1;
    }
  }
  if (a == 3){
//    (+2 if you sell Lily, +1 if you are sympathetic, +1 if you tie your hair into a bun)
    if(flower.indexOf("Lily")!==-1){
      b+=2;
    }
    if(personality == "s"){
      b+=1;
    }
    if(hairstyle = "tb"){
      b+=1;
    }
  }
  if (a == 4){
//    (+2 if you sell Amaryllis, +1 if you dress simple and clean, + 1 if your hair is long and smooth) 
    if(flower.indexOf("Amaryllis")!==-1){
      b+=2;
    }
    if(appearance == "sim"){
      b+=1;
    }
    if(hairstyle = "ls"){
      b+=1;
    }
  }
  if (a == 5){
//    (+2 if you sell Sunflower, +1 if you dress summer vibe, +1 if you are warm and kind)
    if(flower.indexOf("Sunflower")!==-1){
      b+=2;
    }
    if(personality == "w"){
      b+=1;
    }
    if(appearance = "sum"){
      b+=1;
    }
  }
  
  if(b<6){
    health -= 1;
    document.getElementById("health").innerHTML = health.toString();
    result = "<p>"
    flower_data = {
      "sentence" :["You #adverb# #verb2# your customer, who is a/an "+customer+" , a #adjective# bouquet. They were #reaction# with your work and refused your #adjective# bouquet.", 
      "Your customer, who is a/an "+customer+" was #reaction# by your #adverb# #verb3# bouquet and left #reaction2#.",
      "You try to sell your #adjective# bouquet to your customer, who is a/an" +customer+ ", but your bouquet was so #adjective# your customer was #reaction# and left #reaction2#."],
      "verb": ["showing", "presenting", "displaying", "exhibiting"],
      "verb2": ["show", "present", "display", "exhibit"],
      "verb3": ["arranged", "designed", "coordinated", "structured", "planned"],
      "adjective": ["unattractive", "unsightly", "off-putting", "distasteful", "hideous", "plain", "average"],
      "adverb": ["hastily", "sloppily", "messily", "carelessly", "haphazardily"],
      "reaction": ["disgusted", "appalled", "repulsed", "horrified", "revolted", "offended", "shocked"],
      "reaction2" : ["disastisfied", "unhappy", "immediately", "frustrated", "unfulfilled", "displeased"],
      "origin" : ["#sentence#"]
    }
    result += grammars.GenerationSimple(flower_data);
    result += "</p>"
    io.write_into_element(result, "sell_results")

  }else if(b >= 6){
    health += 1;
    document.getElementById("health").innerHTML = health.toString();
    result = "<p>"
    flower_data = {
      "sentence" :["You #adverb# #verb2# your customer, who is a/an "+customer+" , a #adjective# bouquet. They were #reaction# with your work and bought your #adjective# bouquet.", 
      "Your customer, who is a/an "+customer+" was #reaction# by your #adverb# #verb3# bouquet and bought it #reaction2#.",
      "Your bouquet was so #adjective# your customer, who is a/an "+customer+" , bought it #reaction2#."],
      "verb": ["showing", "presenting", "displaying", "exhibiting"],
      "verb2": ["show", "present", "display", "exhibit"],
      "verb3": ["arranged", "designed", "coordinated", "structured", "planned"],
      "adjective": ["beautiful", "colorful", "fragrant", "delicate", "graceful", "cheerful", "radiant", "lovely", "elegant", "vibrant"],
      "adverb": ["neatly", "carefully", "thoughtfully", "meticulously", "attentively"],
      "reaction": ["delighted", "pleased", "content", "impressed"],
      "reaction2" : ["enthusiasitcally", "quickly", "immediately", "happily", "with joy"],
      "origin" : ["#sentence#"]
    }
    result += grammars.GenerationSimple(flower_data);
    result += "</p>"
    io.write_into_element(result, "sell_results")
  }
  counter += 1;
  check_win_condition();
  
}

function check_win_condition(){
  if(health >= 10){
    result = "<p>"
    win_message = {
      "sentence" : [p1+"'s traveling flower business became a #size# success, and they were featured in #size# magazines and newspapers for their #adj# and #adj# approach to floral design. Years went by, and "+p1+"'s business continued to thrive. They traveled to new countries and cities, learning about different floral traditions and cultures and incorporating them into their own work. " +p1+" realized that their true passion wasn't just about selling flowers - it was about bringing joy and beauty into people's lives through their #item#. And that's exactly what they did, one #adjective# arrangement at a time.",
      p1+" traveled to different cities and towns, setting up shop in quaint squares and parks, offering their #adjective# blooms to lovers and dreamers. "+p1+" #adj# designs became famous throughout the land, and soon, they was commissioned by royal families and celebrities alike to create their wedding and event flowers.",
      p1+" traveled to remote areas, seeking out wildflowers and plants to use in their arrangements. "+p1+" believed that the beauty of nature should be preserved, and so they only used sustainable practices in their business. Their #item# became famous for their #adjective# colors and natural scents, and they even won an award for their eco-friendly business.",
      p1+" traveled to different hospitals and clinics, offering their #adjective# arrangements to patients and their families."+p1+ " believed that flowers had the power to uplift people's spirits, and their #adjective# blooms brought hope and joy to those who needed it most. Their #item# became so well-known that they were asked to give a TED Talk on the healing power of flowers."],
      "size" : ["huge", "massive", "immense", "large", "small", "mini"],
      "adj":["unique", "distinct", "creative", "rare", "extraordinary", "exceptional", "original"],
      "adjective": ["beautiful", "colorful", "fragrant", "delicate", "graceful", "cheerful", "radiant", "lovely", "elegant", "vibrant"],
      "number": ["numerous", "various", "many"],
      "item" : ["art", "creation", "bouquet", "work"],
      "origin": ["#sentence#"]
    }
    
    result += grammars.GenerationSimple(win_message);
    result += "</p>"
    io.write_into_element(result, "win_message")
  }
  if(health <= 0){
    result = "<p>"
    win_message = {
      "sentence" : [p1+" soon realized that there were too many other florists in the same areas, all competing for the same business. Despite their best efforts to create #adj# and #adjective# designs, "+p1+" struggled to stand out in the oversaturated market and eventually had to close their business.",
      p1+" was often unreliable, frequently showing up late to events or not delivering orders on time. Customers quickly lost faith in "+p1+"'s business, and negative reviews began to pile up. "+p1+"'s business eventually failed due to their poor reputation.",
      p1+" failed to adequately prepare for the challenges of traveling with fragile flowers and dealing with unpredictable weather conditions. Their flowers often wilted or were damaged during transport, and "+p1+" struggled to meet customer demands. "+p1+" eventually had to close her business due to lack of sales and poor reviews.",
      p1+" charged extremely high prices for their services, which made it difficult for them to attract customers. Despite their #adj# designs, "+p1+" struggled to make enough sales to sustain their business and was eventually forced to close up shop."],
      "size" : ["huge", "massive", "immense", "large", "small", "mini"],
      "adj":["unique", "distinct", "creative", "rare", "extraordinary", "exceptional", "original"],
      "adjective": ["beautiful", "colorful", "fragrant", "delicate", "graceful", "cheerful", "radiant", "lovely", "elegant", "vibrant"],
      "number": ["numerous", "various", "many"],
      "item" : ["art", "creation", "bouquet", "work"],
      "origin": ["#sentence#"]
    }
    
    result += grammars.GenerationSimple(win_message);
    result += "</p>"
    io.write_into_element(result, "win_message")
  }
}

function go_home(){
  if(counter >= 3){
    a = Math.floor(Math.random()*(2));
    if (a == 0){
      health +=1;
      document.getElementById("health").innerHTML = health.toString();
      result ="<p>After a day of hard work. You decided to go home and rest. You woke up feeling rejuvinated.</p>"
      io.write_into_element(result, "home_message")
    }
    else if(a == 1){
      result = "<p> You decided to go to the bar to reward yourself after your work."
      if(personality == "f"){
        health +=1;
        document.getElementById("health").innerHTML = health.toString();
        result += "Your flirtatious personality captivated everyone you talked to, making them want to keep your company."
      }
      if(appearance == "loo"){
        health +=1;
        document.getElementById("health").innerHTML = health.toString();
        result += "Your loosely fitted clothes showed off your healthy figures, which garnered many attentions at the bar."
      }
      result += "You had a fun time at the bar and went back home drunk but entertained. </p>"
      io.write_into_element(result, "home_message")
    }
    counter = 0;
  }
  else{
    console.log("You need to sell more flowers")
  }
  check_win_condition();
  
}



   