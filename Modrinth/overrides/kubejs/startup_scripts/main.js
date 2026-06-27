const layoutData = JsonIO.read('kubejs/config/creative_layout.json');// || { gearworks_items: ['create:hand_crank']};
//const layoutData = { gearworks_items: ['minecraft:dirt']};
const orderedItems = layoutData.gearworks_items;

StartupEvents.registry('creative_mode_tab', event =>{
  // Creative Tab
  event.create('create_gearworks')
    .icon(() => 'create:large_cogwheel')
    .displayName(Text.darkAqua('Create Gearworks'))
    .content(showRestrictedItems =>
      orderedItems
    )
})

