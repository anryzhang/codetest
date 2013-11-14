/*
用as3.0创建一个text, 并在text里打印文字
*/
package  {
	import flash.display.*;
	import flash.text.*;
	import flash.display.MovieClip;
	
	
	public class hello extends MovieClip {
		
		
		public function hello() {
			var myText:TextField = new TextField();
			myText.text = 'hello world';
			addChild(myText);
			// constructor code
		}
	}
	
}
