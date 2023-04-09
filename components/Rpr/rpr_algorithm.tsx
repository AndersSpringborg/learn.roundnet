import { platform } from "os";
import { stringify } from "querystring";

enum hittingPercentage {
    Hitting = 20,
    Defense = 30,
    Serving = 30,
    Cleanliness = 20
}

function calculateHittingScore(player: Player){
    return 20 - 20*(player.spikesReturned/player.spikesMissed);
}

function calculateDefenseScore(player: Player){
    return player.defensiveTouchNotReturned + 0,4 * calculateHittingScore(player) * player.defensiveTouchReturned;
}

function calculateServingScore(player: Player){
    return 5.5 * player.aces + 15 * (player.servesMade/(player.servesMade+player.servesMissed));
}

function calculateCleanlinessScore(player: Player){
    return 20 - 5 * (player.setsMissed + player.spikesMissed) - 2 *(player.toughTouch + player.aced);
}

function calculatePlayerRPR(player: Player){
    return calculateHittingScore(player) + calculateDefenseScore(player) + calculateServingScore(player) + calculateCleanlinessScore(player);
}