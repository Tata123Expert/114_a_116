noseX = 0;
noseY = 0;

function setup()
{
    canvas = createCanvas(450, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(450, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y+5;
    }
}

function modelLoaded()
{
    console.log('poseNet foi incializado');
}

function draw()
{
    image(video, 0, 0, 450, 300);
    circle(noseX, noseY, 35);
    fill(255, 0, 0);
    stroke(230, 0, 0);
}

function takeSnapshot()
{
    save('Foto_com_Filtro.png');
}




























































































