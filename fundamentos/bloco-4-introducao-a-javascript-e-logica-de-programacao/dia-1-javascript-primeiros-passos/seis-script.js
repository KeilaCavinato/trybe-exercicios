let game = "Rainha";
switch (game.toLowerCase()) {
        case "rei":
            console.log('mova em qualquer direção');
            break
            case "torre":
                console.log('linha reta horizontal ou vertical');
                break;
                case "peao":
                    console.log('só uma casa à frente');
                    break;
                    case "rainha":
                        console.log('qualquer direção, quantas casas quiser');
                        break;
            default:
                console.log ('errou');
}
