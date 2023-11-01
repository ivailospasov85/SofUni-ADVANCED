 
 class Ballon{
    constructor(color,hasWeight){
        this.color=color
        this.hasWeight=hasWeight 
    }

    class PartyBallon extends Ballon{


    }
    class BirthdayBallon extends PartyBallon{

    }

    return{
        Ballon,
        PartyBallon,
        BirthdayBallon,
    }
 }
 



 let classes = solution();
 let testBalloon = new classes.Balloon("yellow", 20.5);
 let testPartyBalloon = new classes.PartyBalloon("yellow", 20.5, "red", 10.25);
 let ribbon = testPartyBalloon.ribbon;
 console.log(testBalloon);
 console.log(testPartyBalloon);
 console.log(ribbon);
 