package  {
	
	import flash.display.MovieClip;
	
	import flash.display.*;
	import flash.text.*;
	
	public class bug extends MovieClip {
		
		
		public function bug() {
			// constructor code
			for(var i:int=0; i< 10; i++){
				trace(i);
				showNumber(i);
			}
			
		}
		public function showNumber(num:int){
			var myText:TextField = new TextField();
			myText.text = String(num);
			myText.y = num*20;
			myText.x = 20;
			
			myText.border = true;
			myText.alpha = 0.8;			
			addChild(myText);			
			
		}
	}
	
}
