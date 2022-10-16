import "./Rightbar.css";
import { Input } from "web3uikit";
import {
  useMoralis,
  useWeb3ExecuteFunction,
} from "react-moralis";


const Rightbar = () => {
  const trends = [
    {
      text: "Real Performance Paradox",
    },
    {
      text: "The Email Scam That Nearly Worked On Me",
    },
    {
      text: "The forgotten benefits of “low tech” user interfaces",
    },
    {
      text: "Become a Web3 Developer with just simple JS...",
    },
  ];

  const { Moralis } = useMoralis();
  const contractProcessor = useWeb3ExecuteFunction();

  const support = async () => {
    let amt ;

   

    let options = {
      contractAddress: "0x65da21aCe4b86df32F92CA9244a3989489033C8e",
      functionName: "support",
      abi: [
        { "inputs": [], "name": "support", "outputs": [], "stateMutability": "payable", "type": "function" }
      ],
      params: {
      },
      msgValue: Moralis.Units.ETH(0.005),
    }

    await contractProcessor.fetch({
      params: options,
      onSuccess: () => {
        alert("Succesful support owner");
      },
      onError: (error) => {
        alert(error.message);
        // console.log(error.message);
      },
    });

  }

  return (
    <>
      <div className="rightbarContent">
        <Input label="search" name="search" prefixIcon="search" />

        <div className="trends">
          what are we reading Today
          {trends.map((e, i) => {
            return (
              <div key={i} className="trend">
                <div className="trendText">{e.text}</div>
              </div>
            );
          })}
          <p className="supporting">
            support the owner <br />
            <a href="#" onClick={support}> <span className="tooltip ">Support Us ⭐️    <br /> <span className="tooltiptext">send 0.005 Matic</span></span></a>
          </p>
        </div>

      </div>
    </>
  );
};

export default Rightbar;
