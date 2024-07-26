console.warn("Аддон «Приветствие игроков» успешно загружен!");
import { world } from "@minecraft/server";

world.afterEvents.playerSpawn.subscribe(({ player, initialSpawn }) => {
    if (!initialSpawn) return;
    if (!player.getDynamicProperty("Joined")) {
        player.setDynamicProperty("Joined", true);
        // Приветствие нового игрока
        player.sendMessage("Добро пожаловать на сервер Server§bName§f!");
        player.onScreenDisplay.setTitle("§l§k||§r §fServer§bName§f §l§k||", {
            stayDuration: 100,
            fadeInDuration: 2,
            fadeOutDuration: 4,
            subtitle: "§aДобро пожаловать!"
        });
    } else {
        // Приветствие старого игрока
        player.sendMessage("С возвращением на Server§bName§f!");
        player.onScreenDisplay.setTitle("§l§k||§r §fServer§bName§f §l§k||", {
            stayDuration: 100,
            fadeInDuration: 2,
            fadeOutDuration: 4,
            subtitle: "§aС возвращением!"
        });
    }
});
