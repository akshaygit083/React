import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import InPageNevigation from "./inPageNevigation";

function MatchDetails() {
  let { Id } = useParams();
  let fixedData = {
    matchInfo: {
      matchId: 91596,
      matchDescription: "51st Match",
      matchFormat: "T20",
      matchType: "league",
      complete: false,
      domestic: false,
      matchStartTimestamp: 1714744800000,
      matchCompleteTimestamp: 1714757400000,
      dayNight: false,
      year: 0,
      dayNumber: 0,
      state: "upcoming",
      team1: {
        id: 62,
        name: "Mumbai Indians",
        playerDetails: [
          {
            id: 576,
            name: "Rohit Sharma",
            fullName: "Rohit Sharma",
            nickName: "Rohit",
            captain: false,
            role: "Batsman",
            keeper: false,
            substitute: false,
            teamId: 62,
            battingStyle: "Right-hand bat",
            bowlingStyle: "Right-arm offbreak",
            teamName: "Mumbai Indians",
            faceImageId: 352478,
          },
          {
            id: 13169,
            name: "Tim David",
            fullName: "Tim David",
            nickName: "Tim David",
            captain: false,
            role: "Batsman",
            keeper: false,
            substitute: false,
            teamId: 62,
            battingStyle: "Right-hand bat",
            bowlingStyle: "Right-arm medium",
            teamName: "Mumbai Indians",
            faceImageId: 244810,
          },
          {
            id: 10276,
            name: "Ishan Kishan",
            fullName: "Ishan Kishan",
            nickName: "Ishan Kishan",
            captain: false,
            role: "WK-Batsman",
            keeper: false,
            substitute: false,
            teamId: 62,
            battingStyle: "Left-hand bat",
            bowlingStyle: "",
            teamName: "Mumbai Indians",
            faceImageId: 352492,
          },
          {
            id: 11893,
            name: "Vishnu Vinod",
            fullName: "Vishnu Vinod",
            nickName: "Vishnu Vinod",
            captain: false,
            role: "WK-Batsman",
            keeper: false,
            substitute: false,
            teamId: 62,
            battingStyle: "Right-hand bat",
            bowlingStyle: "",
            teamName: "Mumbai Indians",
            faceImageId: 182026,
          },
          {
            id: 13915,
            name: "Nehal Wadhera",
            fullName: "Nehal Wadhera",
            nickName: "Nehal Wadhera",
            captain: false,
            role: "Batsman",
            keeper: false,
            substitute: false,
            teamId: 62,
            battingStyle: "Left-hand bat",
            bowlingStyle: "Right-arm legbreak",
            teamName: "Mumbai Indians",
            faceImageId: 182026,
          },
          {
            id: 7915,
            name: "Suryakumar Yadav",
            fullName: "Suryakumar Yadav",
            nickName: "Suryakumar Yadav",
            captain: false,
            role: "Batsman",
            keeper: false,
            substitute: false,
            teamId: 62,
            battingStyle: "Right-hand bat",
            bowlingStyle: "Right-arm offbreak",
            teamName: "Mumbai Indians",
            faceImageId: 352481,
          },
          {
            id: 20538,
            name: "Dewald Brevis",
            fullName: "Dewald Brevis",
            nickName: "Brevis",
            captain: false,
            role: "Batsman",
            keeper: false,
            substitute: false,
            teamId: 62,
            battingStyle: "Right-hand bat",
            bowlingStyle: "Right-arm legbreak",
            teamName: "Mumbai Indians",
            faceImageId: 226302,
          },
          {
            id: 466,
            name: "Piyush Chawla",
            fullName: "Piyush Chawla",
            nickName: "Chawla",
            captain: false,
            role: "Bowler",
            keeper: false,
            substitute: false,
            teamId: 62,
            battingStyle: "Left-hand bat",
            bowlingStyle: "Right-arm legbreak",
            teamName: "Mumbai Indians",
            faceImageId: 152613,
          },
          {
            id: 9746,
            name: "Shreyas Gopal",
            fullName: "Shreyas Gopal",
            nickName: "Shreyas Gopal",
            captain: false,
            role: "Bowling Allrounder",
            keeper: false,
            substitute: false,
            teamId: 62,
            battingStyle: "Right-hand bat",
            bowlingStyle: "Right-arm legbreak",
            teamName: "Mumbai Indians",
            faceImageId: 226505,
          },
          {
            id: 14598,
            name: "Anshul Kamboj",
            fullName: "Anshul Kamboj",
            nickName: "Anshul Kamboj",
            captain: false,
            role: "Bowler",
            keeper: false,
            substitute: false,
            teamId: 62,
            battingStyle: "Right-hand bat",
            bowlingStyle: "Right-arm fast-medium",
            teamName: "Mumbai Indians",
            faceImageId: 182026,
          },
          {
            id: 3007,
            name: "Mohammad Nabi",
            fullName: "Mohammad Nabi",
            nickName: "Nabi",
            captain: false,
            role: "Bowling Allrounder",
            keeper: false,
            substitute: false,
            teamId: 62,
            battingStyle: "Right-hand bat",
            bowlingStyle: "Right-arm offbreak",
            teamName: "Mumbai Indians",
            faceImageId: 352437,
          },
          {
            id: 13496,
            name: "Shams Mulani",
            fullName: "Shams Mulani",
            nickName: "Shams Mulani",
            captain: false,
            role: "Batting Allrounder",
            keeper: false,
            substitute: false,
            teamId: 62,
            battingStyle: "Left-hand bat",
            bowlingStyle: "Left-arm orthodox",
            teamName: "Mumbai Indians",
            faceImageId: 182026,
          },
          {
            id: 9647,
            name: "Hardik Pandya",
            fullName: "Hardik Pandya",
            nickName: "Hardik Pandya",
            captain: true,
            role: "Batting Allrounder",
            keeper: false,
            substitute: false,
            teamId: 62,
            battingStyle: "Right-hand bat",
            bowlingStyle: "Right-arm fast-medium",
            teamName: "Mumbai Indians",
            faceImageId: 352482,
          },
          {
            id: 13646,
            name: "Romario Shepherd",
            fullName: "Romario Shepherd",
            nickName: "Shepherd",
            captain: false,
            role: "Bowler",
            keeper: false,
            substitute: false,
            teamId: 62,
            battingStyle: "Right-hand bat",
            bowlingStyle: "Right-arm fast-medium",
            teamName: "Mumbai Indians",
            faceImageId: 226370,
          },
          {
            id: 14504,
            name: "Tilak Varma",
            fullName: "Tilak Varma",
            nickName: "Tilak Varma",
            captain: false,
            role: "Batsman",
            keeper: false,
            substitute: false,
            teamId: 62,
            battingStyle: "Left-hand bat",
            bowlingStyle: "Right-arm offbreak",
            teamName: "Mumbai Indians",
            faceImageId: 226525,
          },
          {
            id: 9311,
            name: "Jasprit Bumrah",
            fullName: "Jasprit Bumrah",
            nickName: "Bumrah",
            captain: false,
            role: "Bowler",
            keeper: false,
            substitute: false,
            teamId: 62,
            battingStyle: "Right-hand bat",
            bowlingStyle: "Right-arm fast",
            teamName: "Mumbai Indians",
            faceImageId: 352488,
          },
          {
            id: 13320,
            name: "Gerald Coetzee",
            fullName: "Gerald Coetzee",
            nickName: "Gerald Coetzee",
            captain: false,
            role: "Bowler",
            keeper: false,
            substitute: false,
            teamId: 62,
            battingStyle: "Right-hand bat",
            bowlingStyle: "Right-arm fast",
            teamName: "Mumbai Indians",
            faceImageId: 351631,
          },
          {
            id: 14190,
            name: "Kumar Kartikeya",
            fullName: "Kumar Kartikeya",
            nickName: "Kartikeya",
            captain: false,
            role: "Bowling Allrounder",
            keeper: false,
            substitute: false,
            teamId: 62,
            battingStyle: "Right-hand bat",
            bowlingStyle: "Left-arm wrist-spin",
            teamName: "Mumbai Indians",
            faceImageId: 327479,
          },
          {
            id: 15727,
            name: "Akash Madhwal",
            fullName: "Akash Madhwal",
            nickName: "Akash Madhwal",
            captain: false,
            role: "Bowler",
            keeper: false,
            substitute: false,
            teamId: 62,
            battingStyle: "Right-hand bat",
            bowlingStyle: "Right-arm fast-medium",
            teamName: "Mumbai Indians",
            faceImageId: 182026,
          },
          {
            id: 13747,
            name: "Arjun Tendulkar",
            fullName: "Arjun Tendulkar",
            nickName: "Arjun Tendulkar",
            captain: false,
            role: "Bowling Allrounder",
            keeper: false,
            substitute: false,
            teamId: 62,
            battingStyle: "Left-hand bat",
            bowlingStyle: "Left-arm fast-medium",
            teamName: "Mumbai Indians",
            faceImageId: 154048,
          },
          {
            id: 18509,
            name: "Nuwan Thushara",
            fullName: "Nuwan Thushara",
            nickName: "N Thushara",
            captain: false,
            role: "Bowler",
            keeper: false,
            substitute: false,
            teamId: 62,
            battingStyle: "Right-hand bat",
            bowlingStyle: "Right-arm fast-medium",
            teamName: "Mumbai Indians",
            faceImageId: 226338,
          },
          {
            id: 36139,
            name: "Naman Dhir",
            fullName: "Naman Dhir",
            nickName: "Naman Dhir",
            captain: false,
            role: "Batsman",
            keeper: false,
            substitute: false,
            teamId: 62,
            battingStyle: "Right-hand bat",
            bowlingStyle: "Right-arm offbreak",
            teamName: "Mumbai Indians",
            faceImageId: 182026,
          },
          {
            id: 14408,
            name: "Shivalik Sharma",
            fullName: "Shivalik Sharma",
            nickName: "Shivalik Sharma",
            captain: false,
            role: "Batsman",
            keeper: false,
            substitute: false,
            teamId: 62,
            battingStyle: "Left-hand bat",
            bowlingStyle: "Right-arm legbreak",
            teamName: "Mumbai Indians",
            faceImageId: 182026,
          },
          {
            id: 9821,
            name: "Luke Wood",
            fullName: "Luke Wood",
            nickName: "Wood",
            captain: false,
            role: "Bowler",
            keeper: false,
            substitute: false,
            teamId: 62,
            battingStyle: "Left-hand bat",
            bowlingStyle: "Left-arm fast-medium",
            teamName: "Mumbai Indians",
            faceImageId: 158044,
          },
          {
            id: 23346,
            name: "Kwena Maphaka",
            fullName: "Kwena Maphaka",
            nickName: "Kwena Maphaka",
            captain: false,
            role: "Bowler",
            keeper: false,
            substitute: false,
            teamId: 62,
            battingStyle: "Left-hand bat",
            bowlingStyle: "Left-arm medium",
            teamName: "Mumbai Indians",
            faceImageId: 182026,
          },
        ],
        shortName: "MI",
      },
      team2: {
        id: 63,
        name: "Kolkata Knight Riders",
        playerDetails: [
          {
            id: 9428,
            name: "Shreyas Iyer",
            fullName: "Shreyas Iyer",
            nickName: "Shreyas Iyer",
            captain: true,
            role: "Batsman",
            keeper: false,
            substitute: false,
            teamId: 63,
            battingStyle: "Right-hand bat",
            bowlingStyle: "Right-arm legbreak",
            teamName: "Kolkata Knight Riders",
            faceImageId: 352480,
          },
          {
            id: 9025,
            name: "Srikar Bharat",
            fullName: "Srikar Bharat",
            nickName: "Srikar Bharat",
            captain: false,
            role: "WK-Batsman",
            keeper: false,
            substitute: false,
            teamId: 63,
            battingStyle: "Right-hand bat",
            bowlingStyle: "",
            teamName: "Kolkata Knight Riders",
            faceImageId: 332894,
          },
          {
            id: 1836,
            name: "Manish Pandey",
            fullName: "Manish Pandey",
            nickName: "Manish Pandey",
            captain: false,
            role: "Batsman",
            keeper: false,
            substitute: false,
            teamId: 63,
            battingStyle: "Right-hand bat",
            bowlingStyle: "Right-arm medium",
            teamName: "Kolkata Knight Riders",
            faceImageId: 171022,
          },
          {
            id: 13213,
            name: "Rahmanullah Gurbaz",
            fullName: "Rahmanullah Gurbaz",
            nickName: "Gurbaz",
            captain: false,
            role: "WK-Batsman",
            keeper: false,
            substitute: false,
            teamId: 63,
            battingStyle: "Right-hand bat",
            bowlingStyle: "Right-arm medium",
            teamName: "Kolkata Knight Riders",
            faceImageId: 352440,
          },
          {
            id: 12337,
            name: "Ramandeep Singh ",
            fullName: "Ramandeep Singh ",
            nickName: "Ramandeep Singh ",
            captain: false,
            role: "Batsman",
            keeper: false,
            substitute: false,
            teamId: 63,
            battingStyle: "Right-hand bat",
            bowlingStyle: "Right-arm medium",
            teamName: "Kolkata Knight Riders",
            faceImageId: 182026,
          },
          {
            id: 9204,
            name: "Nitish Rana",
            fullName: "Nitish Rana",
            nickName: "Nitish Rana",
            captain: false,
            role: "Batsman",
            keeper: false,
            substitute: false,
            teamId: 63,
            battingStyle: "Left-hand bat",
            bowlingStyle: "Right-arm offbreak",
            teamName: "Kolkata Knight Riders",
            faceImageId: 171047,
          },
          {
            id: 13748,
            name: "Sherfane Rutherford",
            fullName: "Sherfane Rutherford",
            nickName: "Rutherford",
            captain: false,
            role: "Batting Allrounder",
            keeper: false,
            substitute: false,
            teamId: 63,
            battingStyle: "Left-hand bat",
            bowlingStyle: "Right-arm fast-medium",
            teamName: "Kolkata Knight Riders",
            faceImageId: 226373,
          },
          {
            id: 10896,
            name: "Rinku Singh",
            fullName: "Rinku Singh",
            nickName: "Rinku Singh",
            captain: false,
            role: "Batsman",
            keeper: false,
            substitute: false,
            teamId: 63,
            battingStyle: "Left-hand bat",
            bowlingStyle: "Right-arm offbreak",
            teamName: "Kolkata Knight Riders",
            faceImageId: 279125,
          },
          {
            id: 10917,
            name: "Venkatesh Iyer",
            fullName: "Venkatesh Iyer",
            nickName: "Venkatesh Iyer",
            captain: false,
            role: "Batting Allrounder",
            keeper: false,
            substitute: false,
            teamId: 63,
            battingStyle: "Left-hand bat",
            bowlingStyle: "Right-arm medium",
            teamName: "Kolkata Knight Riders",
            faceImageId: 226278,
          },
          {
            id: 2276,
            name: "Sunil Narine",
            fullName: "Sunil Narine",
            nickName: "Narine",
            captain: false,
            role: "Bowling Allrounder",
            keeper: false,
            substitute: false,
            teamId: 63,
            battingStyle: "Left-hand bat",
            bowlingStyle: "Right-arm offbreak",
            teamName: "Kolkata Knight Riders",
            faceImageId: 152654,
          },
          {
            id: 12344,
            name: "Anukul Roy",
            fullName: "Anukul Roy",
            nickName: "Anukul Roy",
            captain: false,
            role: "Batting Allrounder",
            keeper: false,
            substitute: false,
            teamId: 63,
            battingStyle: "Left-hand bat",
            bowlingStyle: "Left-arm orthodox",
            teamName: "Kolkata Knight Riders",
            faceImageId: 153915,
          },
          {
            id: 7736,
            name: "Andre Russell",
            fullName: "Andre Russell",
            nickName: "Russell",
            captain: false,
            role: "Bowling Allrounder",
            keeper: false,
            substitute: false,
            teamId: 63,
            battingStyle: "Right-hand bat",
            bowlingStyle: "Right-arm fast",
            teamName: "Kolkata Knight Riders",
            faceImageId: 170821,
          },
          {
            id: 15861,
            name: "Vaibhav Arora",
            fullName: "Vaibhav Arora",
            nickName: "Vaibhav Arora",
            captain: false,
            role: "Bowler",
            keeper: false,
            substitute: false,
            teamId: 63,
            battingStyle: "Right-hand bat",
            bowlingStyle: "Right-arm fast-medium",
            teamName: "Kolkata Knight Riders",
            faceImageId: 182026,
          },
          {
            id: 8393,
            name: "Dushmantha Chameera",
            fullName: "Dushmantha Chameera",
            nickName: "Chameera",
            captain: false,
            role: "Bowler",
            keeper: false,
            substitute: false,
            teamId: 63,
            battingStyle: "Right-hand bat",
            bowlingStyle: "Right-arm fast",
            teamName: "Kolkata Knight Riders",
            faceImageId: 244665,
          },
          {
            id: 24729,
            name: "Harshit Rana",
            fullName: "Harshit Rana",
            nickName: "Harshit Rana",
            captain: false,
            role: "Bowler",
            keeper: false,
            substitute: false,
            teamId: 63,
            battingStyle: "Right-hand bat",
            bowlingStyle: "Right-arm fast-medium",
            teamName: "Kolkata Knight Riders",
            faceImageId: 182026,
          },
          {
            id: 12071,
            name: "Mujeeb Ur Rahman",
            fullName: "Mujeeb Ur Rahman",
            nickName: "Mujeeb",
            captain: false,
            role: "Bowler",
            keeper: false,
            substitute: false,
            teamId: 63,
            battingStyle: "Right-hand bat",
            bowlingStyle: "Right-arm offbreak",
            teamName: "Kolkata Knight Riders",
            faceImageId: 352446,
          },
          {
            id: 13494,
            name: "Chetan Sakariya",
            fullName: "Chetan Sakariya",
            nickName: "Sakariya",
            captain: false,
            role: "Bowler",
            keeper: false,
            substitute: false,
            teamId: 63,
            battingStyle: "Left-hand bat",
            bowlingStyle: "Left-arm fast-medium",
            teamName: "Kolkata Knight Riders",
            faceImageId: 169708,
          },
          {
            id: 7710,
            name: "Mitchell Starc",
            fullName: "Mitchell Starc",
            nickName: "Starc",
            captain: false,
            role: "Bowler",
            keeper: false,
            substitute: false,
            teamId: 63,
            battingStyle: "Left-hand bat",
            bowlingStyle: "Left-arm fast",
            teamName: "Kolkata Knight Riders",
            faceImageId: 352462,
          },
          {
            id: 36487,
            name: "Suyash Sharma",
            fullName: "Suyash Sharma",
            nickName: "Suyash Sharma",
            captain: false,
            role: "Bowler",
            keeper: false,
            substitute: false,
            teamId: 63,
            battingStyle: "Right-hand bat",
            bowlingStyle: "Right-arm legbreak",
            teamName: "Kolkata Knight Riders",
            faceImageId: 182026,
          },
          {
            id: 12926,
            name: "Varun Chakaravarthy",
            fullName: "Varun Chakaravarthy",
            nickName: "Chakaravarthy",
            captain: false,
            role: "Bowler",
            keeper: false,
            substitute: false,
            teamId: 63,
            battingStyle: "Right-hand bat",
            bowlingStyle: "Right-arm legbreak",
            teamName: "Kolkata Knight Riders",
            faceImageId: 226220,
          },
          {
            id: 33129,
            name: "Sakib Hussain",
            fullName: "Sakib Hussain",
            nickName: "Sakib Hussain",
            captain: false,
            role: "Batsman",
            keeper: false,
            substitute: false,
            teamId: 63,
            battingStyle: "Right-hand bat",
            bowlingStyle: "Right-arm medium",
            teamName: "Kolkata Knight Riders",
            faceImageId: 182026,
          },
          {
            id: 22566,
            name: "Angkrish Raghuvanshi",
            fullName: "Angkrish Raghuvanshi",
            nickName: "Angkrish Raghuvanshi",
            captain: false,
            role: "Batting Allrounder",
            keeper: false,
            substitute: false,
            teamId: 63,
            battingStyle: "Right-hand bat",
            bowlingStyle: "Left-arm orthodox",
            teamName: "Kolkata Knight Riders",
            faceImageId: 182026,
          },
          {
            id: 10479,
            name: "Philip Salt",
            fullName: "Philip Salt",
            nickName: "Philip Salt",
            captain: false,
            role: "WK-Batsman",
            keeper: false,
            substitute: false,
            teamId: 63,
            battingStyle: "Right-hand bat",
            bowlingStyle: "Right-arm offbreak",
            teamName: "Kolkata Knight Riders",
            faceImageId: 244804,
          },
        ],
        shortName: "KKR",
      },
      series: {
        id: 7607,
        name: "Indian Premier League 2024",
        seriesType: "",
        startDate: 0,
        endDate: 0,
        seriesFolder: "",
        odiSeriesResult: "",
        t20SeriesResult: "",
        testSeriesResult: "",
      },
      umpire1: {},
      umpire2: {},
      umpire3: {},
      referee: {},
      tossResults: {},
      result: {},
      venue: {
        id: 81,
        name: "Wankhede Stadium",
        city: "Mumbai",
        country: "India",
        timezone: "",
        latitude: "",
        longitude: "",
      },
      status: "Match starts at May 03, 14:00 GMT",
      playersOfTheMatch: [],
      playersOfTheSeries: [],
      revisedTarget: {},
      isMatchNotCovered: false,
      HYSEnabled: 0,
      livestreamEnabled: false,
      isFantasyEnabled: false,
      livestreamEnabledGeo: [],
      alertType: "",
      shortStatus: "May 03, 14:00 GMT",
      matchImageId: 402272,
    },
    venueInfo: {
      established: 1974,
      capacity: "33,000",
      knownAs: null,
      ends: "Garware Pavilion End, Tata End",
      city: "Mumbai",
      country: "India",
      timezone: "+05:30",
      homeTeam: "Mumbai, Mumbai Indians",
      floodlights: true,
      curator: "Sudhir Naik",
      profile:
        "<b>Introduction</b>:\n\nRelatively younger than old-world grounds like Chepauk, Eden Gardens and Feroz Shah Kotla, the Wankhede stadium has its own fair share of unforgettable memories attached to it. It has been home to some of the greatest cricketers to have played for the country. \n\n<b>Venue history</b>:\n\nMumbai has played host to Test matches at three different venues - the first ever Test in India was hosted at the Bombay Gymkhana in 1933-34 against England. After the second World War, Cricket Club of India's (CCI) Brabourne Stadium became the city's second ground. However, a dispute between the CCI and the Mumbai Cricket Association (MCA) over the allocation of tickets for cricket matches forced the latter to build a separate stadium. The stadium was named after the association's president Barrister Sheshrao Krishnarao Wankhede. The initial capacity of the stadium was around 45,000. The first Test was staged in the season of 1974-75 when West Indies toured India.\n\n<b>Venue description</b>:\n\nThe stadium has seven different stands - Sunil Gavaskar Stand, North Stand, Vijay Merchant Stand, Sachin Tendulkar Stand, MCA Pavilion, Divecha Pavilion, and Garware Pavilion.\n\nIn 1996, Wankhede stadium underwent an upgrade, during which, floodlights were installed to provide excellent lighting to host the day and night cricket matches. Wankhede received its second upgrade in 2010-11 before the 2011 World Cup and the ground was unavailable for domestic and international cricket until February 2011. One of the highlights of the stadium is the suspended cantilever roofs. No beam supports on the roofs ensure better view for the spectators. The stadium has 20 elevators for North and South stands. After its renovation and installation of bucket seats the capacity of the Wankhede Stadium was reduced to around 33,000.\n\n<b>How does the pitch play?</b>\n\nThe wicket at the Wankhede offers help for both the pacers and spinners. Close proximity to the Arabian sea helps the swing bowlers considerably, especially during early hours of the day. However, spinners have been known to benefit during the last couple of days of a Test match as the pitch turns into a vicious turner. Although the new ball does a bit in limited-overs cricket, the pitch tends to ease out and favour batsmen as the innings progresses. The venue provides great entertainment when it comes to T20 cricket.\n\n<b>Trivia</b>:\n\nBangladesh scored the lowest ODI total at the stadium. They were 115 all out, when it competed with India in the 1998 season.\n\nRavi Shastri's six sixes in an over off Baroda's Tilak Raj en route to the fastest double-hundred in first-class cricket was on this ground in 1984-85.\n\nby <b>Sonali Dhulap</b>",
      imageUrl:
        "http://i.cricketcb.com/i/stats/fth/540x303/venue/images/81.jpg",
      ground: "Wankhede Stadium",
      groundLength: 0,
      groundWidth: 0,
      otherSports: null,
    },
    broadcastInfo: [
      {
        country: "IN",
        broadcaster: [
          {
            broadcastType: "Streaming",
            value: "Jio Cinema",
          },
          {
            broadcastType: "TV",
            value: "Star Sports Network",
          },
        ],
      },
    ],
  };

  const [data, setData] = useState([]);

  async function FetchMatchDetail() {
    const url = `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${Id}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
        "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setData(result);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    // FetchMatchDetail();
  }, []);

  return (
    <>
        <div className="text-2xl text-center m-5">MatchDetail</div>
        {/* {data.length <= 0 ? (
            <h1>Loding....</h1>
        ) : ( */}
            <InPageNevigation

                teams={[
                    fixedData.matchInfo.team1.shortName,
                    fixedData.matchInfo.team2.shortName,
                ]}>
                    
                    {
                        fixedData.matchInfo.team1.playerDetails.map((data,i) => (
                            <div key={i} className="text-xl m-5">
                                <h1 >{data.fullName}</h1>
                                <h3 className="opacity-50"> {data.role}</h3>
                            </div>
                        ))
                    }


                    {
                        fixedData.matchInfo.team2.playerDetails.map((data,i) => (
                            <div key={i} className="text-xl m-5">
                                <h1 >{data.fullName}</h1>
                                <h3 className="opacity-50"> {data.role}</h3>
                            </div>
                        ))
                    }

            </InPageNevigation>
        {/* )} */}
    </>
);
}

export default MatchDetails;
