events.listen('item.tags', function (event) {
    var items = [
        'aquaculture:neptunium_bow',
        'botania:crystal_bow',
        'botania:flare_chakram',
        'botania:livingwood_bow',
        'botania:thorn_chakram',
        'botaniaadditions:terra_bow',
        'gunswithoutroses:diamond_gatling',
        'gunswithoutroses:diamond_shotgun',
        'gunswithoutroses:diamond_sniper',
        'gunswithoutroses:gold_gun',
        'gunswithoutroses:iron_gun',
        'immersiveengineering:chemthrower',
        'immersiveengineering:railgun',
        'immersiveengineering:revolver',
        'industrialforegoing:infinity_trident',
        'meetyourfight:phantasmal_rifle',
        'mekanism:electric_bow',
        'mekanism:flamethrower',
        'minecraft:bow',
        'minecraft:crossbow',
        'minecraft:trident',
        'pneumaticcraft:micromissiles',
        'pneumaticcraft:minigun',
        'undergarden:slingshot'
    ];
    event.get('forge:weapons').add(items);
    event.get('forge:weapons/ranged').add(items);
});
