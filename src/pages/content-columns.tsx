export default function Columns() {
    return (
        <div className="column-grid">
            <div className="separator-column">column1</div>{/*Column 1 */}
            <div className="content-box"> <Youtube /> </div>{/*Content column */}
            <div className="separator-column">comlumn3</div>{/*Column 3 */}
        </div>
    );

}




function Youtube(){
    return(
    <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube-nocookie.com/embed/aV63-4f88o8" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen>
    </iframe> 
    );
}



/* soundcloud iframe
<div className="content-box">
<iframe 
    title='soundcloud'
    width="100%" 
    height="166" 
    frameBorder="no" 
    allow="autoplay" 
    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/34019569&color=0066cc">
</iframe>
</div>
       {/*  
       <div style="font-size: 10px; 
       color: #cccccc;line-break: anywhere;
       word-break: normal;overflow: hidden;
       white-space: nowrap;text-overflow: ellipsis; 
       font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
       <a href="https://soundcloud.com/the-bugle" title="The Bugle" target="_blank" style="color: #cccccc; text-decoration: none;">The Bugle</a> · <a href="https://soundcloud.com/the-bugle/bugle-179-playas-gon-play" title="Bugle 179 - Playas gon play" target="_blank" style="color: #cccccc; text-decoration: none;">Bugle 179 - Playas gon play</a></div>
*/