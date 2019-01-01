
//images for home page rotation
var curHomRotImg = 0;
var homeRotateDelay = 3;
var rotateHomeImageTimer = null;
var homeRotateImgContainerZIndex = 1000;
var homeRotationImages = new Array()
homeRotationImages[0] = new Image()
homeRotationImages[0].src = '/photos/homeRotation/070_600w.jpg'
homeRotationImages[1] = new Image()
homeRotationImages[1].src = '/photos/homeRotation/1244_600w.jpg'
homeRotationImages[2] = new Image()
homeRotationImages[2].src = '/photos/homeRotation/013_600w.jpg'
homeRotationImages[3] = new Image()
homeRotationImages[3].src = '/photos/homeRotation/078_400h.jpg'
homeRotationImages[4] = new Image()
homeRotationImages[4].src = '/photos/homeRotation/1246_600w.jpg'
homeRotationImages[5] = new Image()
homeRotationImages[5].src = '/photos/homeRotation/024_600w.jpg'
homeRotationImages[6] = new Image()
homeRotationImages[6].src = '/photos/homeRotation/104_600w.jpg'
homeRotationImages[7] = new Image()
homeRotationImages[7].src = '/photos/homeRotation/060_400h.jpg'

//testimonials
var testimonials = new Array();
testimonials[0] = '&quot;I have been a client of Laura since January 2014 and known her for a few years at the Gym where I worked out. I have really enjoyed working out with Laura, she knows just how and when to encourage and pushed me out of my comfort zone...&quot;<br /><b>Sharon C.</b>'
testimonials[1] = '&quot;In 2012 I received what would become one of my favorite Christmas gifts ever…a set of personal training sessions with Laura Brenton.  I knew upon meeting her that I would be challenged with each session, but I soon learned about the wealth of knowledge and encouragement that came with each meeting...&quot;<br /><b>Julia Curto-Lowe</b>'
testimonials[2] = '&quot;Laura is the best of the best when it comes to her training methods and her level of expertise.  She will individualize my workouts to my personal fitness needs and always encourage me to work hard.  She is the perfect combination of tough, considerate and professional...&quot;<br /><b>A. Boes - Raleigh, NC</b>'
testimonials[3] = '&quot;Laura has been training me twice a week for the last 4 years. She has trained me through a shoulder surgery as well as a pregnancy and is the reason I got back in shape quickly after both!&quot;<br /><b>Baily Bergman - 33</b>'
testimonials[4] = '&quot;I came to Laura as a nationally ranked strongman competitor and Powerlifter looking to become a better all around athlete. I wanted to lose body fat and keep hard earned muscle, all while gaining strength. What I expected to be a tall order was nothing short of hard work but well worth the effort.&quot;<br /><b>Tra Farrington</b>'
testimonials[5] = '&quot;Laura has been my personal trainer nearly a year.  I have been very pleased with my muscle strength and conditioning.  Laura is a perfectionist about proper form and technique which is imperative to prevent injury and get the best results possible.  Without hesitation I would recommend Laura for any age or level of fitness.&quot;<br /><b>R. Rowe - 49</b>'

//Sharon C.
//tmpHtml += '<tr><td style="text-align:left;vertical-align:middle;padding:20px">&quot;I have been a client of Laura since January 2014 and known her for a few years at the Gym where I worked out. I have really enjoyed working out with Laura, she knows just how and when to encourage and pushed me out of my comfort zone, which was such an achievement! Laura believed in me and helped me achieve my personal fitness goals! Without any hesitation, Laura is a professional and excellent personal trainer! Her extensive knowledge ad enthusiastic commitment to her work, clients and promoting a healthier lifestyle shows on a daily basis! Thank you Laura!!&quot;<br /><b>Sharon C.</b></td></tr>'
//Julia CL
//tmpHtml += '<tr><td style="text-align:left;vertical-align:middle;padding:20px">&quot;In 2012 I received what would become one of my favorite Christmas gifts ever…a set of personal training sessions with Laura Brenton.  I knew upon meeting her that I would be challenged with each session, but I soon learned about the wealth of knowledge and encouragement that came with each meeting.<br />Having worked with Laura for almost two years, there have been significant changes in my muscle tone, strength and definition, in addition to vast improvements in my cardiac endurance.  I am happier and more content when I know that I have successfully completed a good workout with Laura.<br />However, some of the most important changes are not visible. Because Laura is so knowledgeable, because she pushes me to try harder each time, and because she holds me accountable, I have a better attitude and more determination about my own long-term health.  And about my fitness ability in everyday life as a mom, wife, and friend.  And knowledge about how this all comes together. I can now make the best decisions each day to maintain a healthy life style.<br />The benefits from personal training with Laura are extensive and life-changing.  Not only I have I developed a healthier body and mind; but I have gained a terrific friend and ally.&quot;<br /><b>Julia Curto-Lowe</b></td></tr>'
//A. Boes
//tmpHtml += '<tr><td style="text-align:left;vertical-align:middle;padding:20px">&quot;Laura is the best of the best when it comes to her training methods and her level of expertise.  She will individualize my workouts to my personal fitness needs and always encourage me to work hard.  She is the perfect combination of tough, considerate and professional.  I love that her goal is to help her clients achieve their ultimate level of health, physically and mentally.  She never focuses on \'losing weight\', but on getting stronger. Of course, as a result, I have become the most physically fit I have ever known.  I always look forward to EVERY SINGLE workout with Laura, even when I know I\'m about to get my butt kicked...because Laura makes it all worth it and the results are the proof! I highly recommend her!&quot;<br /><b>A. Boes - Raleigh, NC</b></td></tr>'
//Baily Bergman
//tmpHtml += '<tr><td style="text-align:left;vertical-align:middle;padding:20px">&quot;Laura has been training me twice a week for the last 4 years. She has trained me through a shoulder surgery as well as a pregnancy and is the reason I got back in shape quickly after both! I train with Laura because she makes me work hard every single workout and I know she cares about me and my fitness goals. Laura has always been able to challenge me at every stage of my fitness journey while understanding any injuries or limitations I have had along the way. She is very knowledgeable about all aspects of fitness and no workout is ever the same! I have trained with Laura one-on-one, in a large group setting, as well as in a small group setting and however you choose to train with her, you will get results and have fun in the process!&quot;<br /><b>Baily Bergman - 33</b></td></tr>'
//Tra Farrington
//tmpHtml += '<tr><td style="text-align:left;vertical-align:middle;padding:20px"><img src="/photos/TraFarrington_lift.jpg" alt="Tra Farrington" title="Tra Farrington" style="float:right;">&quot;I came to Laura as a nationally ranked strongman competitor and Powerlifter looking to become a    better all around athlete. I wanted to lose body fat and keep hard earned muscle, all while gaining strength. What I expected to be a tall order was nothing short of hard work but well worth the effort. Laura took me outside of my comfort zone to turn my strengths into weaknesses. She taught me how to recruit and contract my muscles to get the most out of every movement.  My results were above and beyond my expectations. My body fat percentage went down, I increased my lean muscle mass, I’m more aware of my body and I\'m an even stronger competitor. Since training with Laura, I\'ve won a Powerlifting State championship, National Championship and now I\'m preparing for The World Championship, all in the same year!&quot;<br /><b>Tra Farrington</b></td></tr>'
//R. Rowe
//tmpHtml += '<tr><td style="text-align:left;vertical-align:middle;padding:20px">&quot;Laura has been my personal trainer nearly a year.  I have been very pleased with my muscle strength and conditioning.  Laura is a perfectionist about proper form and technique which is imperative to prevent injury and get the best results possible.  Without hesitation I would recommend Laura for any age or level of fitness.&quot;<br /><b>R. Rowe - 49</b></td></tr>'


function fadeHomeImage() {

    var d = document.getElementById('homeImgRotDiv_' + curHomRotImg)

    //if (d == null) return;
    //if (rotateHomeImageTimer != null) {
    //    clearInterval(rotateHomeImageTimer);
    //    rotateHomeImageTimer = null;
    //}

    var op = 1;  // initial opacity
    rotateHomeImageTimer = setInterval(function () {
        if (op <= 0.01) {
            clearInterval(rotateHomeImageTimer);
            rotateHomeImageTimer = null;
            d.style.display = 'none';
            rotateHomeImage();
        } else {
            d.style.opacity = op;
            d.style.filter = 'alpha(opacity=' + op * 100 + ')';
            op -= op * 0.1;
        }
    }, 50);

}

function hideMenuDrop() {
    document.getElementById('menuDropDiv').style.display = 'none';
    initMenu();
}

function initMenu() {

    //home
    document.getElementById('btnHome').className = 'menuHead';
    document.getElementById('btnHome').onmouseover = function () { mnuOver(document.getElementById('btnHome')); };
    document.getElementById('btnHome').onmouseout = function () { mnuOut(document.getElementById('btnHome')); };
    document.getElementById('btnHome').onclick = function () { loadHome(); };
    //about
    document.getElementById('btnAbout').className = 'menuHead';
    document.getElementById('btnAbout').onmouseover = function () { mnuOver(document.getElementById('btnAbout')); };
    document.getElementById('btnAbout').onmouseout = function () { mnuOut(document.getElementById('btnAbout')); };
    document.getElementById('btnAbout').onclick = function () { loadAbout(); };
    //services
    document.getElementById('btnServices').className = 'menuHead';
    document.getElementById('btnServices').onmouseover = function () { mnuOver(document.getElementById('btnServices')); showServiceMenu(); };
    document.getElementById('btnServices').onmouseout = function () { mnuOut(document.getElementById('btnServices')); };
    document.getElementById('btnServices').onclick = function () { showServiceMenu(); };
    //rates
    document.getElementById('btnRates').className = 'menuHead';
    document.getElementById('btnRates').onmouseover = function () { mnuOver(document.getElementById('btnRates')); };
    document.getElementById('btnRates').onmouseout = function () { mnuOut(document.getElementById('btnRates')); };
    document.getElementById('btnRates').onclick = function () { loadRates(); };
    //testimonials
    document.getElementById('btnTestimonials').className = 'menuHead';
    document.getElementById('btnTestimonials').onmouseover = function () { mnuOver(document.getElementById('btnTestimonials')); };
    document.getElementById('btnTestimonials').onmouseout = function () { mnuOut(document.getElementById('btnTestimonials')); };
    document.getElementById('btnTestimonials').onclick = function () { loadTestimonials(); };
    //contact
    document.getElementById('btnContact').className = 'menuHead';
    document.getElementById('btnContact').onmouseover = function () { mnuOver(document.getElementById('btnContact')); };
    document.getElementById('btnContact').onmouseout = function () { mnuOut(document.getElementById('btnContact')); };
    document.getElementById('btnContact').onclick = function () { loadContact(); };

} 

function initPage() {

    loadHome();

    initMenu();

    //create div for drop-down menu items
    newDiv = document.createElement('div')
    newDiv.id = 'menuDropDiv'
    newDiv.style.display = 'none'
    newDiv.style.position = 'absolute'
    document.body.appendChild(newDiv)

    //images for home page rotation
    

}

function loadAbout() {

    var tmpHtml = ''
    tmpHtml += '<br /><font style="font-size:24px;font-family:papy;font-weight:bold">About</font><br /><br />'
    tmpHtml += '<table style="margin-left:auto;margin-right:auto;">'
    tmpHtml += '<tr><td style="text-align:left;vertical-align:middle;padding:20px">Laura has been involved in the fitness industry for over 14 years serving as both a personal trainer and group fitness instructor. Having been a dancer and former fitness competitor she understands the dedication and discipline it takes to be successful in reaching goals.  She brings a wealth of knowledge and experience to her clients, meeting them at their current fitness level and motivating them to push hard to reach their fitness goals.<br /><br />'
    tmpHtml += 'Laura’s passion for health and fitness drives her to help each client acheive success. Every client no matter age, fitness level, or gender becomes a personal challenge for Laura to help them become the best they can possibly be and in the process, help them find their own passion for health and fitness! Laura has trained clients through pregnancies, injuries, and surgery rehab, successfully training them back to where they wanted to be and beyond. <br /><br />'
    tmpHtml += 'Being a group fitness instructor, Laura is excellent at training small groups and paying individual attention to each one making them feel as if they were getting one on one training. Laura has a unique sense of body awareness and proper alignment that allows her to teach her clients perfect form, allowing them to make the most out of each workout. Her clients success and well being is extremely important to Laura as well as building a personal relationship with them too. Every client matters. Laura has numerous certifications in group fitness and personal training.<br /><br />'
    tmpHtml += 'Laura also works with her clients on nutrition because nutrition is very important in the health and fitness journey in order to achieve the best long term overall results. She has judged several bodybuilding, fitness, and figure competitions giving her a greater knowledge of overall muscular symmetry. Laura makes a point of strengthening ALL muscles to create better balance and overall strength. Her unique training methods will get you in the best shape possible!</td></tr>'
    tmpHtml += '</table>'
    tmpHtml += 'Located in Rolesville, NC<br />'
    tmpHtml += '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12923.985894831796!2d-78.45998030157996!3d35.92258633994659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1403793004014" width="400" height="300" frameborder="0" style="border:0"></iframe><br /><br /><br />'

    document.getElementById('mainTD').innerHTML = tmpHtml;

    stopHomePageImageRotate();

}

function loadAthleticPerformance() {
    var tmpHtml = '<br /><font style="font-size:24px;font-family:papy;font-weight:bold">Athletic Performance</font><br/><br/>'
    tmpHtml += '<table style="margin-left:auto;margin-right:auto;">'
    tmpHtml += '<tr><td style="text-align:left;vertical-align:middle;padding:20px">Tennis, golf, basketball, soccer, running, whatever your choice sport may be, I can help you take your game to the next level. Whether you’re a beginner, weekend warrior, or a seasoned pro, I’ll prepare a training and conditioning routine for you. You’ll gain the endurance to keep going, the strength to power through, and the speed to get ahead.</td></tr>'
    tmpHtml += '</table>'

    document.getElementById('mainTD').innerHTML = tmpHtml;

    stopHomePageImageRotate();

}

function loadBodyBuilding() {
    var tmpHtml = '<br /><font style="font-size:24px;font-family:papy;font-weight:bold">Body Building, Fitness/Figure Competition</font><br/><br/>'
    tmpHtml += '<table style="margin-left:auto;margin-right:auto;">'
    tmpHtml += '<tr><td style="text-align:left;vertical-align:middle;padding:20px">Being a former fitness & figure competitor myself, and having judged several bodybuilding and physique competitions, I have deep insight as to what it takes to be the best on stage. From training to diet to what goes on backstage to the physical and mental discipline that is required. Not only can I train your body, but I can help you prepare mentally as well. Proper <a href="javascript:loadNutritionalCounseling()">nutritional counseling</a> is also essential to success in this sport.</td></tr>'
    tmpHtml += '</table>'

    document.getElementById('mainTD').innerHTML = tmpHtml;

    stopHomePageImageRotate();

}

function loadContact() {
    var tmpHtml = '<br /><font style="font-size:24px;font-family:papy;font-weight:bold">Contact us</font><br/><br/>'
    tmpHtml += '<table style="margin-left:auto;margin-right:auto;">'
    tmpHtml += '<tr><td align="right" valign="top">email:</td><td valign="top"><a href="mailto:laurab@nc.rr.com">laurab@nc.rr.com</a><br /></td></tr>'
    tmpHtml += '<tr><td align="right" valign="top">phone:</td><td valign="top">919-632-5151<br /></td></tr>'
    tmpHtml += '</table>'
    tmpHtml += '<br /><br />'
    tmpHtml += 'Located in Rolesville, NC<br />'
    tmpHtml += '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12923.985894831796!2d-78.45998030157996!3d35.92258633994659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1403793004014" width="400" height="300" frameborder="0" style="border:0"></iframe><br /><br /><br />'

    document.getElementById('mainTD').innerHTML = tmpHtml;

    stopHomePageImageRotate();

}

function loadHome() {

    var x = 0;
    var wrkElem;

    //just in case the user clicks on home while we're already on home...
    stopHomePageImageRotate();

    /**
    var tmpHtml = ''//'<br /><font style="font-size:24px;font-family:papy;font-weight:bold">Welcome To</font><br />'
    tmpHtml += '<font style="font-size:36px;font-family:papy;font-weight:bold">Level Ten Fitness</font><br /><br />'
    tmpHtml += '<font style="font-size:24px;font-family:papy;font-weight:bold">Personal Trainer and Group Fitness Training</font><br /><br />'
    tmpHtml += '<font style="font-size:18px;font-family:papy;font-weight:bold">Serving Raleigh/Wake Forest/Rolesville, North Carolina</font><br /><br />'
    tmpHtml += '<a style="font-size:18px;" href="javascript:loadTestimonials()">See what people are saying about Level Ten Fitness</a><br /><br />'
    **/

    var tmpHtml = '<table style="width:99%;margin:auto"">'
    tmpHtml += '<tr>'
    tmpHtml += '   <td style="width:70%;vertical-align:top;">'
    tmpHtml += '      <table style="width:100%">'
    tmpHtml += '         <tr>'
    tmpHtml += '            <td style="padding:10px">'
    //tmpHtml += '               <div style="width:100%;height:400px;border-radius: 10px;background-image: url(\'/photos/homeRotation/1244_600w.jpg\');">&nbsp;</div>'
    tmpHtml += '               <div id="homeImgRotContainer" style="width:100%;height:400px;position:relative;z-index:' + homeRotateImgContainerZIndex + '">'
    //tmpHtml += '                  <div id="imgRot_B" style="width:100%;height:100%;position:absolute;top:0;left:0;border-radius: 10px>&nbsp;</div>'
    //tmpHtml += '                  <div id="imgRot_A" style="width:100%;height:100%;position:absolute;top:0;left:0;border-radius: 10px>&nbsp;</div>'
    for (var i = (homeRotationImages.length - 1); i >= 0; --i) {
        //alert(homeRotationImages[i].src)
        ++x;
        newZ = homeRotateImgContainerZIndex + x;
        tmpHtml += '<div id= "homeImgRotDiv_' + i + '" style="width:100%;height:100%;position:absolute;z-index:'+newZ+';top:0;left:0;border-radius: 10px;background-image: url(\'' + homeRotationImages[i].src + '\');">&nbsp;</div>'
        curHomRotImg = i;
    }
    tmpHtml += '               &nbsp;</div>'
    tmpHtml += '            </td>'
    tmpHtml += '         </tr>'
    tmpHtml += '      </table>'
    tmpHtml += '      <table style="width:100%">'
    tmpHtml += '         <tr>'
    tmpHtml += '            <td style="padding:10px">'
    tmpHtml += '               <a href="javascript:loadAbout()"><img src="/images/AboutLaura.png" style="float:left" title="About Laura" /></a>'
    tmpHtml += '            </td>'
    tmpHtml += '            <td style="padding:10px;vertical-align:top">'
    tmpHtml += '               <font style="font-size:44px;font-family:papy;font-weight:bold">Level Ten Fitness</font><br />'
    tmpHtml += '               <font style="font-size:24px;font-family:papy;font-weight:bold">Personal Trainer and<br />Group Fitness Training</font><br /><br />'
    tmpHtml += '               <font style="font-size:18px;font-family:papy;font-weight:bold">Serving Raleigh/Wake Forest/Rolesville, North Carolina</font><br /><br />'
    tmpHtml += '            </td>'
    tmpHtml += '         </tr>'
    tmpHtml += '      </table>'
    tmpHtml += '   </td>'
    tmpHtml += '   <td style="width:30%;padding:10px;vertical-align:top">'
    tmpHtml += '      <table style="width:100%">'
    //tmpHtml += '         <tr>'
    //tmpHtml += '            <td style="padding:10px;vertical-align:top">'
    //tmpHtml += '               <b><u><font style="font-size:20px">Specials</font></u></b>'
    //tmpHtml += '               <br />...<br />...<br />...<br />...<br />...<br />...<br />...<br />...<br />...<br />...<br />...<br />'
    //tmpHtml += '            </td>'
    //tmpHtml += '         </tr>'
    tmpHtml += '         <tr>'
    tmpHtml += '            <td style="padding:10px;vertical-align:top">'
    //tmpHtml += '               <b><u><font style="font-size:20px">Clients corner</font></u></b>'
    //tmpHtml += '               <br />...<br />...<br />...<br />...<br />...<br />...<br />...<br />...<br />...<br />...<br />...<br />'
    tmpHtml += '               <table style="margin-left:auto;margin-right:auto;">'
    tmpHtml += '                  <tr><td><b><u><font style="font-size:20px">Client\'s corner</font></u></b></td></tr>'
    tmpHtml += '                  <tr><td style="text-align:left;vertical-align:middle">'

    tmpHtml += testimonials[randomIntFromInterval(0, testimonials.length-1)]

    tmpHtml += '                  </td></tr>'
    tmpHtml += '               </table>'
    tmpHtml += '               <a href="javascript:loadTestimonials()">more...</a>'
    tmpHtml += '            </td>'
    tmpHtml += '         </tr>'
    tmpHtml += '      </table>'
    tmpHtml += '   </td>'
    tmpHtml += '</tr>'
    tmpHtml += '</table>'

    document.getElementById('mainTD').innerHTML = tmpHtml;

    startHomePageImageRotate();

}

function loadNutritionalCounseling() {
    var tmpHtml = '<br /><font style="font-size:24px;font-family:papy;font-weight:bold">Nutritional Counseling</font><br /><br />'
    tmpHtml += '<table style="margin-left:auto;margin-right:auto;">'
    tmpHtml += '<tr><td style="text-align:left;vertical-align:middle;padding:20px">For most, nutrition is the hardest component in fitness. Trying to figure out what good choices are, too much of this and not enough of that. Balanced meals that will fuel your body for optimal performance and overall good health can be confusing and overwhelming. I will help guide you and teach you proper eating habits. I will teach you how to make healthy nutrition a lifestyle and show you that it is much easier than you think. You do not have to live a boring and bland lifestyle to eat properly. Baby steps into proper nutrition is the key to success.</td></tr>'
    tmpHtml += '</table>'

    document.getElementById('mainTD').innerHTML = tmpHtml;

    stopHomePageImageRotate();

}

function loadPersonalTraining() {
    var tmpHtml = '<br /><font style="font-size:24px;font-family:papy;font-weight:bold">Personal Training</font><br /><br />'
    tmpHtml += '<table style="margin-left:auto;margin-right:auto;">'
    tmpHtml += '<tr><td style="text-align:left;vertical-align:middle;padding:20px">One-on-one workouts that are tailored to your specific level that progress as your strength and fitness level improves. Whether the client is looking for specific training or overall general health and fitness, helping you reach your personal goals is the number one priority.</td></tr>'
    tmpHtml += '</table>'

    document.getElementById('mainTD').innerHTML = tmpHtml;

    stopHomePageImageRotate();

}

function loadRates() {
    var tmpHtml = '<br /><font style="font-size:24px;font-family:papy;font-weight:bold">Rates</font><br/><br/>'
    tmpHtml += '<table style="margin-left:auto;margin-right:auto;">'
    tmpHtml += '<tr><td colspan="2" style="text-align:middle"><b><u>Personal Training</u></b></td></tr>'
    tmpHtml += '<tr><td style="text-align:right">1 one-hour session:</td><td style="text-align:left">$60</td></tr>'
    tmpHtml += '<tr><td style="text-align:right">5 one-hour sessions:</td><td style="text-align:left">$225</td></tr>'
    tmpHtml += '<tr><td style="text-align:right">10 one-hour sessions:</td><td style="text-align:left">$400</td></tr>'
    tmpHtml += '<tr><td colspan="2" style="text-align:middle"><br /><b><u>If I come to you...</u></b></td></tr>'
    tmpHtml += '<tr><td style="text-align:right">1 one-hour session:</td><td style="text-align:left">$80</td></tr>'
    tmpHtml += '<tr><td style="text-align:right">10 or more sessions:</td><td style="text-align:left">$60/hour</td></tr>'
    tmpHtml += '<tr><td colspan="2" style="text-align:middle"><br /><b><u>Semi-private (2 people)</u></b></td></tr>'
    tmpHtml += '<tr><td style="text-align:right">1 one-hour session:</td><td style="text-align:left">$35/person</td></tr>'
    tmpHtml += '<tr><td style="text-align:right">5 one-hour sessions:</td><td style="text-align:left">$150/person</td></tr>'
    tmpHtml += '<tr><td colspan="2" style="text-align:middle">Buy 10 sessions get 1 free</td></tr>'
    tmpHtml += '<tr><td colspan="2" style="text-align:middle"><br /><b><u>Small Group Training (3-5 people)</u></b></td></tr>'
    tmpHtml += '<tr><td style="text-align:right">3 people - one hour session:</td><td style="text-align:left">$25/person</td></tr>'
    tmpHtml += '<tr><td style="text-align:right">4 people - one hour session:</td><td style="text-align:left">$20/person</td></tr>'
    tmpHtml += '<tr><td style="text-align:right">5 people - one hour session:</td><td style="text-align:left">$15/person</td></tr>'
    tmpHtml += '<tr><td colspan="2" style="text-align:middle"><br /><b><u>Boot Camp / Athletic Training Classes (6 - 10 people)</u></b></td></tr>'
    tmpHtml += '<tr><td style="text-align:right">One hour session:</td><td style="text-align:left">$10/person</td></tr>'
    tmpHtml += '<tr><td colspan="2" style="text-align:middle"><br /><a href="/NewClientSpecial.html">Click here for new client specials</a></td></tr>'
    tmpHtml += '</table>'
    tmpHtml += '<br /><br />'

    document.getElementById('mainTD').innerHTML = tmpHtml;

    stopHomePageImageRotate();

}

function loadSmallGroupTraining() {
    var tmpHtml = '<br /><font style="font-size:24px;font-family:papy;font-weight:bold">Small Group Training</font><br /><br />'
    tmpHtml += '<table style="margin-left:auto;margin-right:auto;">'
    tmpHtml += '<tr><td style="text-align:left;vertical-align:middle;padding:20px">Small group training is a great way to get that instruction, motivation, and challenge at a more economical cost. Working out alongside others can be very motivating and often encourages clients to push beyond their comfort zone. While at the same time you will still receive that personal touch and workouts tailored to your personal fitness level.</td></tr>'
    tmpHtml += '</table>'

    document.getElementById('mainTD').innerHTML = tmpHtml;

    stopHomePageImageRotate();

}

function loadTestimonials() {
    var tmpHtml = '<br /><font style="font-size:24px;font-family:papy;font-weight:bold">Testimonials</font><br /><br />'
    tmpHtml += '<table style="margin-left:auto;margin-right:auto;">'
    //Sharon C.
    tmpHtml += '<tr><td style="text-align:left;vertical-align:middle;padding:20px">&quot;I have been a client of Laura since January 2014 and known her for a few years at the Gym where I worked out. I have really enjoyed working out with Laura, she knows just how and when to encourage and pushed me out of my comfort zone, which was such an achievement! Laura believed in me and helped me achieve my personal fitness goals! Without any hesitation, Laura is a professional and excellent personal trainer! Her extensive knowledge ad enthusiastic commitment to her work, clients and promoting a healthier lifestyle shows on a daily basis! Thank you Laura!!&quot;<br /><b>Sharon C.</b></td></tr>'
    //Julia CL
    tmpHtml += '<tr><td style="text-align:left;vertical-align:middle;padding:20px">&quot;In 2012 I received what would become one of my favorite Christmas gifts ever…a set of personal training sessions with Laura Brenton.  I knew upon meeting her that I would be challenged with each session, but I soon learned about the wealth of knowledge and encouragement that came with each meeting.<br />Having worked with Laura for almost two years, there have been significant changes in my muscle tone, strength and definition, in addition to vast improvements in my cardiac endurance.  I am happier and more content when I know that I have successfully completed a good workout with Laura.<br />However, some of the most important changes are not visible. Because Laura is so knowledgeable, because she pushes me to try harder each time, and because she holds me accountable, I have a better attitude and more determination about my own long-term health.  And about my fitness ability in everyday life as a mom, wife, and friend.  And knowledge about how this all comes together. I can now make the best decisions each day to maintain a healthy life style.<br />The benefits from personal training with Laura are extensive and life-changing.  Not only I have I developed a healthier body and mind; but I have gained a terrific friend and ally.&quot;<br /><b>Julia Curto-Lowe</b></td></tr>'
    //A. Boes
    tmpHtml += '<tr><td style="text-align:left;vertical-align:middle;padding:20px">&quot;Laura is the best of the best when it comes to her training methods and her level of expertise.  She will individualize my workouts to my personal fitness needs and always encourage me to work hard.  She is the perfect combination of tough, considerate and professional.  I love that her goal is to help her clients achieve their ultimate level of health, physically and mentally.  She never focuses on \'losing weight\', but on getting stronger. Of course, as a result, I have become the most physically fit I have ever known.  I always look forward to EVERY SINGLE workout with Laura, even when I know I\'m about to get my butt kicked...because Laura makes it all worth it and the results are the proof! I highly recommend her!&quot;<br /><b>A. Boes - Raleigh, NC</b></td></tr>'
    //Baily Bergman
    tmpHtml += '<tr><td style="text-align:left;vertical-align:middle;padding:20px">&quot;Laura has been training me twice a week for the last 4 years. She has trained me through a shoulder surgery as well as a pregnancy and is the reason I got back in shape quickly after both! I train with Laura because she makes me work hard every single workout and I know she cares about me and my fitness goals. Laura has always been able to challenge me at every stage of my fitness journey while understanding any injuries or limitations I have had along the way. She is very knowledgeable about all aspects of fitness and no workout is ever the same! I have trained with Laura one-on-one, in a large group setting, as well as in a small group setting and however you choose to train with her, you will get results and have fun in the process!&quot;<br /><b>Baily Bergman - 33</b></td></tr>'
    //Tra Farrington
    tmpHtml += '<tr><td style="text-align:left;vertical-align:middle;padding:20px"><img src="/photos/TraFarrington_lift.jpg" alt="Tra Farrington" title="Tra Farrington" style="float:right;">&quot;I came to Laura as a nationally ranked strongman competitor and Powerlifter looking to become a    better all around athlete. I wanted to lose body fat and keep hard earned muscle, all while gaining strength. What I expected to be a tall order was nothing short of hard work but well worth the effort. Laura took me outside of my comfort zone to turn my strengths into weaknesses. She taught me how to recruit and contract my muscles to get the most out of every movement.  My results were above and beyond my expectations. My body fat percentage went down, I increased my lean muscle mass, I’m more aware of my body and I\'m an even stronger competitor. Since training with Laura, I\'ve won a Powerlifting State championship, National Championship and now I\'m preparing for The World Championship, all in the same year!&quot;<br /><b>Tra Farrington</b></td></tr>'
    //R. Rowe
    tmpHtml += '<tr><td style="text-align:left;vertical-align:middle;padding:20px">&quot;Laura has been my personal trainer nearly a year.  I have been very pleased with my muscle strength and conditioning.  Laura is a perfectionist about proper form and technique which is imperative to prevent injury and get the best results possible.  Without hesitation I would recommend Laura for any age or level of fitness.&quot;<br /><b>R. Rowe - 49</b></td></tr>'
    tmpHtml += '</table>'

    document.getElementById('mainTD').innerHTML = tmpHtml;

    stopHomePageImageRotate();

}

function loadTRX() {
    var tmpHtml = '<br /><font style="font-size:24px;font-family:papy;font-weight:bold">TRX</font><br /><br />'
    tmpHtml += '<table style="margin-left:auto;margin-right:auto;">'
    tmpHtml += '<tr><td style="text-align:left;vertical-align:middle;padding:20px">TRX Suspension training provides an intense and effective workout using your own body weight. There are hundreds of exercises that can be performed from beginner to advanced. TRX builds strength, muscular endurance, and an amazing core, because you use your core for every single exercise.</td></tr>'
    tmpHtml += '</table>'

    document.getElementById('mainTD').innerHTML = tmpHtml;

    stopHomePageImageRotate();

}

function mnuOut(o) {
    o.className = 'menuHead';
}

function mnuOver(o) {
    hideMenuDrop();
    o.className = 'menuHeadOver';
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function rotateHomeImage() {

    var tmpIdx
    var x = 0;

    for (var i = (homeRotationImages.length - 1) ; i >= 0; --i) {
        tmpIdx = i + (curHomRotImg + 1)
        if (tmpIdx >= homeRotationImages.length) tmpIdx = tmpIdx - homeRotationImages.length;
        document.getElementById('homeImgRotDiv_' + tmpIdx).style.zIndex = homeRotateImgContainerZIndex + x++
    }


    //Reset the faded image div, now that it's in the back
    document.getElementById('homeImgRotDiv_' + curHomRotImg).style.display = 'block'
    document.getElementById('homeImgRotDiv_' + curHomRotImg).style.opacity = 1
    document.getElementById('homeImgRotDiv_' + curHomRotImg).style.filter = 'alpha(opacity=100)';

    curHomRotImg++
    if (curHomRotImg >= homeRotationImages.length) curHomRotImg = 0;

    window.setTimeout(fadeHomeImage, homeRotateDelay * 1000)

}

function showServiceMenu() {

    var tmpHtml = ''
    var mDiv = document.getElementById('menuDropDiv')
    var bObj = document.getElementById('btnServices');
    //leftPos
    //console.log(findXPos(bObj))

    bObj.onmouseover = null;
    bObj.onmouseout = null;

    tmpHtml = '<table id="menuDropTable" style="background-color:#2e3192">'
    tmpHtml += '<tr><td class="menuItem" onmouseover="this.className=\'menuItemOver\'" onmouseout="this.className=\'menuItem\'" onclick="loadPersonalTraining();hideMenuDrop();">personal training</td></tr>'
    tmpHtml += '<tr><td class="menuItem" onmouseover="this.className=\'menuItemOver\'" onmouseout="this.className=\'menuItem\'" onclick="loadSmallGroupTraining();hideMenuDrop();">small group training</td></tr>'
    tmpHtml += '<tr><td class="menuItem" onmouseover="this.className=\'menuItemOver\'" onmouseout="this.className=\'menuItem\'" onclick="loadAthleticPerformance();hideMenuDrop();">athletic performance</td></tr>'
    tmpHtml += '<tr><td class="menuItem" onmouseover="this.className=\'menuItemOver\'" onmouseout="this.className=\'menuItem\'" onclick="loadTRX();hideMenuDrop();">TRX</td></tr>'
    tmpHtml += '<tr><td class="menuItem" onmouseover="this.className=\'menuItemOver\'" onmouseout="this.className=\'menuItem\'" onclick="loadBodyBuilding();hideMenuDrop();">body building/fitness/figure</td></tr>'
    tmpHtml += '<tr><td class="menuItem" onmouseover="this.className=\'menuItemOver\'" onmouseout="this.className=\'menuItem\'" onclick="loadNutritionalCounseling();hideMenuDrop();">nutritional counseling</td></tr>'
    tmpHtml += '</table>'

    mDiv.innerHTML = tmpHtml;
    mDiv.style.top = (findYPos(bObj) + bObj.offsetHeight) + 'px';
    mDiv.style.left = (findXPos(bObj)) + 'px';
    mDiv.style.display = 'block';

    //document.getElementById('btnServicesPersonalTraining').onmouseover = function () { mnuOver(document.getElementById('btnServicesPersonalTraining')); };
    //document.getElementById('btnServicesPersonalTraining').onmouseout = function () { mnuOut(document.getElementById('btnServicesPersonalTraining')); };
    //document.getElementById('btnServicesPersonalTraining').onclick = function () { loadPersonalTraining(); };

    mDiv.onmouseleave = function () { hideMenuDrop(); };
    
}

function startHomePageImageRotate() {

    //var divA = document.getElementById('imgRot_A')
    //var divB = document.getElementById('imgRot_B')

    //divB.style.backgroundImage = homeRotationImages[0]

    //curHomRotImg = 0;

    window.setTimeout(fadeHomeImage, homeRotateDelay * 1000)

}

function stopHomePageImageRotate() {

    for (var i = (homeRotationImages.length - 1) ; i >= 0; --i) {
        wrkElem = document.getElementById('homeImgRotDiv_' + i);
        if (!(wrkElem === null)) {
            wrkElem.parentNode.removeChild(wrkElem);
        }
    }
    if (rotateHomeImageTimer != null) {
        clearInterval(rotateHomeImageTimer);
        rotateHomeImageTimer = null;
    }

}