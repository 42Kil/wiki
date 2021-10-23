__NUXT_JSONP__("/seedgen", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac){return {data:[{article:{slug:u,title:F,toc:[],body:{type:l,children:[{type:b,tag:d,props:{},children:[{type:a,value:G},{type:b,tag:g,props:{to:A},children:[{type:a,value:H}]},{type:a,value:I},{type:b,tag:e,props:{href:B,rel:[h,i,j],target:k},children:[{type:a,value:C}]},{type:a,value:J}]},{type:a,value:c},{type:b,tag:v,props:{"by-path":y},children:[{type:a,value:c}]}]},dir:y,path:"\u002Fseedgen\u002F_index",extension:m,createdAt:f,updatedAt:f},sidebarArticles:[{slug:u,title:"Ori WotW Randomizer wiki",sidebarTitle:"Home",toc:[],body:{type:l,children:[{type:b,tag:d,props:{},children:[{type:a,value:"Welcome to the Ori and the Will of the Wisps randomizer wiki!"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This is a mod for the PC version of Ori and the Will of the Wisps which changes the location of pickups. So when playing\nthe randomizer you will probably find skills when picking up a spirit light container!\nThis mod greatly improves the replayability of the game and is playable by anyone who already finished the game once.\nFor more advanced players, harder difficulties will ask you to progress by using more advanced movement options or\nglitches."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This wiki includes lots of information to help install the game, understand the options for seed generation, and learn\nabout all the new things included in this mod."}]}]},dir:w,path:w,extension:m,createdAt:f,updatedAt:f},{slug:u,title:"Features",toc:[],body:{type:l,children:[{type:b,tag:d,props:{},children:[{type:a,value:"The main function of this randomizer is shuffling all the item locations.\nThat means it’s completely possible to collect a spirit light container but get the double jump skill instead.\nLikewise, Skill Trees don’t always give you a skill, so you might find a Gorlek Ore when activating the Bash Skill Tree."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The item placement however is not completely random: there is an algorithm or logic to the chaos.\nThis ensures that every playthrough is beatable by placing each progression item at a location you will be able to reach.\nFor more information, you can read the "},{type:b,tag:g,props:{to:D},children:[{type:a,value:"paths sections of the seed generation"}]},{type:a,value:".\nThis mod also adds other functionality to the game. Click on the links below to learn more about them."}]},{type:a,value:c},{type:b,tag:v,props:{"by-path":K,deep:E},children:[{type:a,value:c}]}]},dir:K,path:"\u002Ffeatures\u002F",extension:m,createdAt:f,updatedAt:f},{slug:"installation",title:"Installation",toc:[{id:L,depth:n,text:M},{id:N,depth:n,text:O},{id:P,depth:n,text:Q},{id:R,depth:n,text:S},{id:T,depth:n,text:U}],body:{type:l,children:[{type:b,tag:o,props:{id:L},children:[{type:b,tag:e,props:{href:"#prerequisites",ariaHidden:p,tabIndex:q},children:[{type:b,tag:r,props:{className:[s,t]},children:[]}]},{type:a,value:M}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The OriWotw Randomizer requires the latest version of the game on PC (either windows store or steam is\nfine)."}]},{type:a,value:c},{type:b,tag:o,props:{id:N},children:[{type:b,tag:e,props:{href:"#download",ariaHidden:p,tabIndex:q},children:[{type:b,tag:r,props:{className:[s,t]},children:[]}]},{type:a,value:O}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Download the lastest "},{type:b,tag:V,props:{},children:[{type:a,value:"WotwRandoSetup.exe"}]},{type:a,value:" from "},{type:b,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002Fori-rando\u002Fbuild\u002Freleases",rel:[h,i,j],target:k},children:[{type:a,value:"this page"}]},{type:a,value:". Launch this file to\ninstall the randomizer. Remember where you installed it, since you will be launching the mod from this folder."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Because the randomizer is working by injecting its own functionalities in the base game, anti-virus tend to view it as a malware.\nYou might need to whitelist the folder in which you installed the randomizer so you anti-virus ins't preventing it from launching and installing."}]},{type:a,value:c},{type:b,tag:o,props:{id:P},children:[{type:b,tag:e,props:{href:"#steam",ariaHidden:p,tabIndex:q},children:[{type:b,tag:r,props:{className:[s,t]},children:[]}]},{type:a,value:Q}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Since the randomizer needs to launch Ori and the Will of the Wisps, it needs to know where your steam installation\nfolder is. If you installed Steam in a non-default location, the randomizer installer will ask you this path. You can\nchange the Steam path later in your "},{type:b,tag:g,props:{to:W},children:[{type:a,value:"settings"}]},{type:a,value:" if needed."}]},{type:a,value:c},{type:b,tag:o,props:{id:R},children:[{type:b,tag:e,props:{href:"#windows-store",ariaHidden:p,tabIndex:q},children:[{type:b,tag:r,props:{className:[s,t]},children:[]}]},{type:a,value:S}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The randomizer should automatically detect that you have the Windows store version of the game and prompt\nyou to install the randomizer for it. If it does not, after installing, you can open "},{type:b,tag:g,props:{to:W},children:[{type:a,value:"the settings"}]},{type:a,value:" by\neither clicking the Settings button or launching RandoSettings.exe from the randomizer installation folder. Look for\nthe 'Use Windows Store' option."}]},{type:a,value:c},{type:b,tag:o,props:{id:T},children:[{type:b,tag:e,props:{href:"#after-installation",ariaHidden:p,tabIndex:q},children:[{type:b,tag:r,props:{className:[s,t]},children:[]}]},{type:a,value:U}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Check out the "},{type:b,tag:g,props:{to:X},children:[{type:a,value:"getting started"}]},{type:a,value:" page for suggestions on how to generate your first\nseed."}]}]},dir:w,path:Y,extension:m,createdAt:f,updatedAt:f},{slug:"how-to-start",title:"How to start",toc:[],body:{type:l,children:[{type:b,tag:d,props:{},children:[{type:a,value:"After "},{type:b,tag:g,props:{to:Y},children:[{type:a,value:"installing the randomizer"}]},{type:a,value:", you can start "},{type:b,tag:V,props:{},children:[{type:a,value:"Ori and the Will of the Wisps Randomizer.exe"}]},{type:a,value:" which will open a "},{type:b,tag:g,props:{to:A},children:[{type:a,value:"Launcher"}]},{type:a,value:" from where you'll be able to do everything you need in order to play the randomizer."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Firstly, you need to get a .wotwr file. These files contain the necessary information for your randomized playthrough, like the location of each item. You can generate these files yourself by\nusing the seed generator integrated in the launcher. You can find instruction on how to use the seed generator "},{type:b,tag:e,props:{href:B,rel:[h,i,j],target:k},children:[{type:a,value:C}]},{type:a,value:Z}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"For beginners, we recommend to play with the Moki preset and the All Wisps goal. You can choose to disable All Wisps which is\na "},{type:b,tag:g,props:{to:_},children:[{type:a,value:"goal mode"}]},{type:a,value:" preventing you from entering the last Willow room before you collected all 5 wisps."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"After you get your first .wotwr file, you want to double click on it. It should ask you which program you want to use in\norder to open this type of file. Choose to browse for more apps on your computer and search the file WotwRando.exe which\nis located in your randomizer installation folder. Once you have associated .wotwr files with the randomizer executor,\nyou shouldn’t have to do it again and simply double clicking on a .wotwr will launch the randomizer."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The randomizer will then launch Ori and the Will of the Wisps. If it takes too long, the randomizer will fail to launch\nbut the vanilla game will most likely launch itself nonetheless so make sure Steam is already opened before launching\nthe randomizer."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"When you reach the main menu, you can try to press "},{type:b,tag:g,props:{to:"\u002Ffeatures\u002Fspecial-commands"},children:[{type:a,value:"Alt+L"}]},{type:a,value:" which should display a textbox\nwith some information about the seed. If nothing appeared, the randomizer failed to inject itself in the game so you’ll\nneed to close the game and open your .wotwr file again."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Once the randomizer launches successfully, you simply need to start playing! It’s recommended to play on a new save file\nbecause the randomizer will also affect savefiles made with the base game. If you ever feel lost when playing a seed,\nyou can open your map and use "},{type:b,tag:g,props:{to:"\u002Ffeatures\u002Flogic-helper"},children:[{type:a,value:"In Logic filter"}]},{type:a,value:" which will show you every item you can collect with the skills you have.\nYou can also read the "},{type:b,tag:g,props:{to:D},children:[{type:a,value:"paths section of the seed generation"}]},{type:a,value:" to learn more about what the randomizer might want you to do. The\ncommunity is also able to help so don’t hesitate to join\nthe "},{type:b,tag:e,props:{href:"https:\u002F\u002Fdiscord.com\u002Finvite\u002FaSz79M4",rel:[h,i,j],target:k},children:[{type:a,value:"Ori speedrunning Discord"}]},{type:a,value:" or\nthe "},{type:b,tag:e,props:{href:"https:\u002F\u002Fdiscord.gg\u002FAhwh4Na",rel:[h,i,j],target:k},children:[{type:a,value:"Ori randomizer development Discord"}]},{type:a,value:" if you need help with something!"}]}]},dir:w,path:X,extension:m,createdAt:f,updatedAt:f},{slug:u,title:F,toc:[],body:{type:l,children:[{type:b,tag:d,props:{},children:[{type:a,value:G},{type:b,tag:g,props:{to:A},children:[{type:a,value:H}]},{type:a,value:I},{type:b,tag:e,props:{href:B,rel:[h,i,j],target:k},children:[{type:a,value:C}]},{type:a,value:J}]},{type:a,value:c},{type:b,tag:v,props:{"by-path":y},children:[{type:a,value:c}]}]},dir:y,path:"\u002Fseedgen\u002F",extension:m,createdAt:f,updatedAt:f},{slug:u,title:"Tutorials",toc:[{id:$,depth:n,text:aa},{id:ab,depth:n,text:ac}],body:{type:l,children:[{type:b,tag:o,props:{id:$},children:[{type:b,tag:e,props:{ariaHidden:p,href:"#locations",tabIndex:q},children:[{type:b,tag:r,props:{className:[s,t]},children:[]}]},{type:a,value:aa}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"There are quite a few ways to shortcut \u002F navigate specific location, the following section goes over what you need\nto skip location requirements."}]},{type:a,value:c},{type:b,tag:v,props:{"by-path":"\u002Ftutorials\u002Flocation",deep:E},children:[{type:a,value:c}]},{type:a,value:c},{type:b,tag:o,props:{id:ab},children:[{type:b,tag:e,props:{ariaHidden:p,href:"#movement",tabIndex:q},children:[{type:b,tag:r,props:{className:[s,t]},children:[]}]},{type:a,value:ac}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Movement in Ori and the Will of the Wisps is quite deep. There are a bunch of advanced movement options that you might\nnot know about but don’t worry, this section will teach you everything you need to know to play the randomizer."}]},{type:a,value:c},{type:b,tag:v,props:{"by-path":"\u002Ftutorials\u002Fmovement",deep:E},children:[{type:a,value:c}]}]},dir:"\u002Ftutorials",path:"\u002Ftutorials\u002F",extension:m,createdAt:f,updatedAt:f},{slug:"plando",title:"Plandomizer",toc:[],body:{type:l,children:[{type:b,tag:d,props:{},children:[{type:a,value:"A plandomizer (often shortened as plando) is a special kind of seed where another person chose the item placement. These seeds can be showcase of what the header's language can let you do or custom challenges. You need to launch them through the randomizer in order to play them. Plandos are created by using a custom programation language which you can learn by reading through the "},{type:b,tag:e,props:{href:"https:\u002F\u002Fdocs.google.com\u002Fdocument\u002Fd\u002F1IR1DHnbtO8rydCLEgFh-yp3iRkzZbFAG-EmR5hxrfmU\u002Fedit",rel:[h,i,j],target:k},children:[{type:a,value:"Header Documentation"}]},{type:a,value:Z}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Here is a list of every available Plandos. You can contact the plando's creator if there isn't any direct link to them and you want to play them :"}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:c},{type:b,tag:x,props:{},children:[{type:b,tag:e,props:{href:"https:\u002F\u002Fwww.dropbox.com\u002Fs\u002Fis8324jbdkwk6fk\u002FItsDangerousToGoAlone.zip?dl=0",rel:[h,i,j],target:k},children:[{type:a,value:"It's Dangerous To Go Alone"}]},{type:a,value:" by Sirius, a high difficulty challenge"}]},{type:a,value:c},{type:b,tag:x,props:{},children:[{type:a,value:"Chaos by CosmicAngel, completely randomize your skills once you collect a new pickup"}]},{type:a,value:c},{type:b,tag:x,props:{},children:[{type:b,tag:e,props:{href:"https:\u002F\u002Fwww.youtube.com\u002Fwatch?v=6GxAqIRbSM0",rel:[h,i,j],target:k},children:[{type:a,value:"Fireball"}]},{type:a,value:" by CosmicAngel"}]},{type:a,value:c},{type:b,tag:x,props:{},children:[{type:a,value:"Kaizo by CosmicAngel"}]},{type:a,value:c},{type:b,tag:x,props:{},children:[{type:a,value:"Time (Act 1) by CosmicAngel"}]},{type:a,value:c}]}]},dir:w,path:"\u002Fplando",extension:m,createdAt:f,updatedAt:f}]}],fetch:{"data-v-b47cf678:0":{articles:[{slug:"generator",title:"Generator",tags:[z],path:"\u002Fseedgen\u002Fgenerator"},{slug:"goals",title:"Goals",tags:[z],path:_},{slug:"headers",title:"Headers",tags:[z],path:"\u002Fseedgen\u002Fheaders"},{slug:"paths",title:"Paths",tags:["logic group"],path:D},{slug:"presets",title:"Presets",tags:[z],path:"\u002Fseedgen\u002Fpresets"}]}},mutations:void 0}}("text","element","\n","p","a","2021-10-23T15:53:16.928Z","nuxt-link","nofollow","noopener","noreferrer","_blank","root",".md",2,"h2","true",-1,"span","icon","icon-link","_index","page-list","\u002F","li","\u002Fseedgen","seedgen","\u002Ffeatures\u002Flauncher","https:\u002F\u002Fwotw.orirando.com\u002Fseedgen","here","\u002Fseedgen\u002Fpaths","","Seed Genenation","A seed is one particular placement of items in the game. For Will of the Wisps, that information is stored in a .wotwr file which you can generate using the seed generator. You can access it either though the ","randomizer Launcher"," or on the Internet ",". There is a bunch of options but don't worry, this page will go through each of them.","\u002Ffeatures","prerequisites","Prerequisites","download","Download","steam","Steam","windows-store","Windows Store","after-installation","After Installation","code","\u002Ffeatures\u002Fsettings","\u002Fhow-to-start","\u002Finstallation",".","\u002Fseedgen\u002Fgoals","locations","Locations","movement","Movement")));