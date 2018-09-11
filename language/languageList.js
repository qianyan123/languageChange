$(document).ready(function(){
var language_slider=$('.language_slider');
		var languages=[
						{name:'English',location:''},{name:'German',location:''},
						{name:'Russian',location:''},{name:'French',location:''},
						{name:'Spanish',location:''},{name:'Portuguese',location:''},
						{name:'Italian',location:''},{name:'Japanses',location:''},
						{name:'Chinese',location:''},{name:'Albanlan',location:''},
						{name:'Arabic',location:''},{name:'Azerbaijani',location:''},
						{name:'Irish',location:''},{name:'Estonian',location:''},
						{name:'Basque',location:''},{name:'Belarusian',location:''},
						{name:'Bulgarian',location:''},{name:'Icelandic',location:''},
						{name:'Polish',location:''},{name:'Bosnian',location:''},
						{name:'Persian',location:''},{name:'Afrikaans',location:''},
						{name:'Danish',location:''},{name:'Filipino',location:''},
						{name:'Finnish',location:''},{name:'Khmer',location:''},
						{name:'Georgian',location:''},{name:'Gujarati',location:''},
						{name:'Kazakh',location:''},{name:'Haitian Creole',location:''},
						{name:'Korean',location:''},{name:'Hausa',location:''},
						{name:'Dutch',location:''},{name:'Galician',location:''},
						{name:'Catalan',location:''},{name:'Czech',location:''},
						{name:'Kannada',location:''},{name:'Croatian',location:''},
						{name:'Latin',location:''},{name:'Latvian',location:''},
						{name:'Lao',location:''},{name:'Lithuanian',location:''},
						{name:'Romanian',location:''},{name:'Malagasy',location:''},
						{name:'Maltese',location:''},{name:'Marathi',location:''},
						{name:'Malayalam',location:''},{name:'Malay',location:''},
						{name:'Macedonian',location:''},{name:'Maori',location:''},
						{name:'Mongolian',location:''},{name:'Bengali',location:''},
						{name:'Myanmar (Burmese)',location:''},{name:'Hmong',location:''},
						{name:'Zulu',location:''},{name:'Nepali',location:''},
						{name:'Norwegian',location:''},{name:'Punjabi',location:''},
						{name:'Chichewa',location:''},{name:'Swedish',location:''},
						{name:'Serbian',location:''},{name:'Sesotho',location:''},
						{name:'Sinhala',location:''},{name:'Esperanto',location:''},
						{name:'Slovak',location:''},{name:'Slovenian',location:''},
						{name:'Swahili',location:''},{name:'Cebuano',location:''},
						{name:'Somali',location:''},{name:'Tajik',location:''},
						{name:'Telugu',location:''},{name:'Tamil',location:''},
						{name:'Thai',location:''},{name:'Turkish',location:''},
						{name:'Welsh',location:''},{name:'Urdu',location:''},
						{name:'Ukrainian',location:''},{name:'Uzbek',location:''},
						{name:'Hebrew',location:''},{name:'Greek',location:''},
						{name:'Hungarian',location:''},{name:'Armenian',location:''},
						{name:'Igbo',location:''},{name:'Yiddish',location:''},
						{name:'Hindi',location:''},{name:'Sundanese',location:''},
						{name:'Indonesian',location:''},{name:'Javanese',location:''},
						{name:'Yoruba',location:''},{name:'Vietnamese',location:''},
					];

		languages.reverse();

		//var showlanguage = localStorage.getItem("name");


		//$('#showLanguage a').text(showlanguage);

		var templateString='';
		//for(var i=0;i<languages.length;i++){
		//	if($('#showLanguage a').text()===languages[i].name){languages.splice(i,1)}
		//}

		for(var i=0;i<languages.length;i++){
			templateString='<li class="list"> <a href="#" target="_blank" title='+languages[i].name+'>'+languages[i].name+'</a> </li>'+templateString;
		}

		var template=templateString;
	
		$('.language_slider').html(template);

	
		$('#showLanguage').mouseover(function(){
			$('.language_slider').css('display','block');

			//$('.language_slider a').click(function(){
				//localStorage.setItem('name',$(this).attr('title'));
				//console.log(localStorage);
				//console.log('name',$(this).attr('title'));
			//})
			$('.container').mouseleave(function(){
				$('.language_slider').css('display','none');
			})
		})
	})