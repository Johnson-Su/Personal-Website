import Navbar from "../../components/Navbar"
import Bottom from "../../components/Bottom.js"

import Probsol from "../../components/ProjectPageComponents/Probsol.js"
import Overview from "../../components/ProjectPageComponents/Overview.js"
import DoubleImages from "../../components/ProjectPageComponents/DoubleImages.js"
import GenericText from "../../components/ProjectPageComponents/GenericText.js"

function StegHide() {
  return (
    <>
    <Navbar/>
    <div className="spacerM mnone"></div>
    <div style={{height:'32px',width:'100%'}}></div>

    <Overview
        status="Personal Project"
        title="Steg Hide"
        desc="Open source program for hiding and transporting information to areas of the world with censorship on knowledge"
        copyright=""
        links={["GitHub|https://github.com/Johnson-Su/Steg-Hide"]}
        image="msteghide.png"
        style={{backgroundColor: 'black', borderRadius: '12px'}}
    />

    <div className="spacerM"></div>

    <Probsol
        problem="How can I give the freedom of information to those who are affected by the censorship of knowledge?"
        solution="Allow crucial information and knowledge to be concealed in transport by concealing their data in the pixels of images"
        tools="C"
        team="Solo project"
        duration="On Hiatus"
        optionname="Topic"
        optioncontent="Freedom of Information"
    />

    <div className="spacerM"></div>

    <GenericText
        title="What it does"
        content={
            <>
            <p>Steg hide is a very <b>small and compact program written in C that lets you hide important data in plain sight</b>. 
            Steg Hide will go through an image and change the 0’s and 1’s of an image to store the information of another file in the image. 
            It can also go through modified images and retrieve or wipe the information in the pixels and read the hidden information.</p>
            </>
        }
    />

    <div className="spacerM"></div>

    <DoubleImages
        title="Visual Comparison"
        captions={["This image has no information Hidden in the pixels",
        "This image contains a portion of the Bee Movie script hidden in the pixels"]}
        images={["StegHide/coverpic.png","StegHide/stegpic.png"]}
    />


    <DoubleImages
        title="No, I didn't use the same image twice"
        captions={["The 'static' of the unmodified image is random and has no visible pattern",
        "The first 3/5ths of the modified image have a noticeably less random 'static' pattern as there is data hidden there"]}
        images={["StegHide/coverstatic.png","StegHide/stegstatic.png"]}
    />

    <DoubleImages
        title=""
        captions={["Only the static is shown here to emphasize the random 'noise' in the original image",
        "It is even more clear here that the 'static' in the modified area of the image is different"]}
        images={["StegHide/onlycoverstatic.png","StegHide/onlystegstatic.png"]}
    />

    <div className="spacerM"></div>

    <GenericText
        title="How It Works"
        content={
            <p>
            To start it is important to know that all data in a computer can be broken down into a series of 0's and 1's. For PGM images, each pixel is represented with an unsigned integer that can be between 0 (black) and 255 (white). These numbers can be made out of a combination of 8 bits
            <br /><br />ex// 120 in binary is 0111 1000<br /><br />
            <b>This program changes the LSB (least significant bit)</b> which for the example would be 0111 10<b>0</b>. This small change shifts the color value of the pixel by so little that the human eye basically cannot detect the change but now the information has been stored. This allows the image to store about 1/8th of it's file size with hidden information
            <br /><br />If we wanted to write in the character 'A' [0100 0001] into the image we would need 8 pixels as each pixel can store 1 bit of hidden data.
            <br /><br />The images with "static" have been modified by either making the whole pixel the same as the LSB (pure static) or by changing the value of a much more significant bit to the LSB (partial static). By applying these filters <span class="bold">images that have had their LSB changed can be detected</span>.
            </p>
        }
    />

    <div className="spacerM"></div>

    <GenericText
        title="Planned Changes"
        content={
            <p>
                • Read from an image folder and export data to documents<br />
                • LSB steganography on BMP (bitmap) images<br />
                • LSB steganography on PPM (portable pixmap) images<br />
                • Implementing image edge detection to write data in the visual edges of an image to make it harder to detect hidden information<br />
                • Encryption to prevent embeded data to be read by a third party
            </p>
        }
    />

    <div className="spacerL"></div>
    <Bottom/>
    </>
  );
}

export default StegHide;
