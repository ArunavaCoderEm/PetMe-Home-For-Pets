import { useState } from 'react'
import  '../CSS/Caraousal.css'

function Caraousal() {

  return (
    <>
    <div className="containe">
	

	<input type="radio" id="i1" name="images" checked/>
	<input type="radio" id="i2" name="images" />
	<input type="radio" id="i3" name="images" />
	<input type="radio" id="i4" name="images"  />
	
	<div className="slide_img" id="one">			
			
			<img src="https://www.hdwallpapers.in/download/golden_retriever_dog_in_red_yellow_lights_blur_bokeh_background_4k_hd_dog-3840x2160.jpg"/>
				<label className="prev" for="i4"><span></span></label>
				<label className="next" for="i2"><span></span></label>	
		
	</div>
	
	<div className="slide_img" id="two">
		
			<img src="https://i.imgur.com/2auciE0.jpg" />
			
				<label className="prev" for="i1"><span></span></label>
				<label className="next" for="i3"><span></span></label>
		
	</div>
			
	<div className="slide_img" id="three">
			<img src="https://s1.1zoom.me/b6055/224/Dogs_Husky_536350_1920x1080.jpg"/>	
			
				<label className="prev" for="i2"><span></span></label>
				<label className="next" for="i4"><span></span></label>
	</div>


	<div className="slide_img" id="four">
			<img src="https://wallpapercave.com/wp/wp3492733.jpg"/>	
			
				<label className="prev" for="i3"><span></span></label>
				<label className="next" for="i1"><span></span></label>

	</div>

	<div id="nav_slide">
		<label for="i1" className="dots" id="dot1"></label>
		<label for="i2" className="dots" id="dot2"></label>
		<label for="i3" className="dots" id="dot3"></label>
		<label for="i4" className="dots" id="dot4"></label>
	</div>
		
</div>
    </>
  )
}

export default Caraousal