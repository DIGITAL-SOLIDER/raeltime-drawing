function setup()
{
    CaNVAS = createCapture(VIDEO);
    CaNVAS.size(300,590);

    CANVaS = createCanvas(1050,510);
    CANVaS.position(300,100);
    
    poseNet = ml5.poseNet(CaNVAS,modelloaded);
    poseNet.on("pose",gotpose);
}

function modelloaded()
{
    console.log("today i am in a bad mood");
}
noseX=""
noseY=""
rX=""
lX=""
difer=""
function gotpose(result)
{
    if(result.lenght>0)
    {
        console.log(result);
        noseX = result[0].pose.nose.x;
        noseY = result[0].pose.nose.y;
        rX = result[0].pose.rightWrist.x;
        lX = result[0].pose.leftWrist.x;
        difer = floor(rX-lX)
    }
}

function draw()
{
    background("blue")
    fill("orange")
    stroke("pink")
    square(noseX,noseY,difer)
}

