import { useEffect } from "react";
import "./styles.css";
import FetchFlag from "./FetchFlag";

//written by Ronald Marin-Dragonetti
export default function App() {
  return (
    <div className="App">
      <h1>🎢Hello Ramp Team!!🎢</h1>
      <FetchFlag />
    </div>
  );
}

//Script used to get answer - yippee!
/*
url = "https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge"

response = requests.get(url)

soup = BeautifulSoup(response.content, "lxml")

print(''.join([node.get('value') for node in soup.select('code[data-class^="23"] div[data-tag$="93"] span[data-id*="21"] i.ramp.char')]))


#elastic
*/
