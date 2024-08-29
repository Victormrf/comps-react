import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoDatabase  } from 'react-icons/go';

function ButtonPage() {

    return <div>
        <div>
            <Button danger outline rounded>
                <GoDatabase />
                Vasco
            </Button>
        </div>
        <div>
            <Button warning outline>
                da
            </Button>
        </div>
        <div>
            <Button success outline>
                <GoCloudDownload /> 
                Gama
            </Button>
        </div>
        <div>
            <Button secondary outline rounded> 
                <GoBell /> 
                O
            </Button>
        </div>
        <div>
            <Button primary outline>
                Maior
            </Button>
        </div>
    </div>
}

export default ButtonPage;