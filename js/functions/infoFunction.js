function returnAll() {
    //先找到存在session地資料，透過key 返回JSON格式

    let residentialBuildingLeaseAgreement = sessionStorage.getItem('residentialBuildingLeaseAgreement')
    let contractHistory = sessionStorage.getItem('contractHistory')


    //JSON.parse():解析JSON格式，將前一頁儲存(JSON格式的entity)轉回原本entity的類型
    let returnResidentialBuildingLeaseAgreement = JSON.parse(residentialBuildingLeaseAgreement)
    let returnContractHistory = JSON.parse(contractHistory)

    console.log(returnResidentialBuildingLeaseAgreement)
    console.log(returnContractHistory)

    $('#house_name').attr("value", returnResidentialBuildingLeaseAgreement.houseName)
    $('#house_stairs').attr("value", returnResidentialBuildingLeaseAgreement.houseStairs)
    $('#house_room').attr("value", returnResidentialBuildingLeaseAgreement.houseRoom)
    $('#house_address').attr("value", returnResidentialBuildingLeaseAgreement.houseAddress)
    $('#house_registry').attr("value", returnResidentialBuildingLeaseAgreement.houseRegistry)

    //=========================================================================
    let houseTypesRadio = returnResidentialBuildingLeaseAgreement.houseTypes
    switch (houseTypesRadio) {
        case 'マンション': $('#house_types_1').attr("checked", true); break;
        case 'アパート': $('#house_types_2').attr("checked", true); break;
        case '戸建': $('#house_types_3').attr("checked", true); break;
        case 'テラスハウス': $('#house_types_4').attr("checked", true); break;
        // case 以外 default
        default: $('#house_types_5').attr("checked", true);
            if ($('#house_types_5').attr("checked", true)) {
                $('#house_types_other').attr("value", returnResidentialBuildingLeaseAgreement.houseTypes)
            }

            break;
    }

    //============================================================================

    $('#house_structure').attr("value", returnResidentialBuildingLeaseAgreement.houseStructure)
    $('#house_households').attr("value", returnResidentialBuildingLeaseAgreement.houseHouseholds)
    $('#house_completion_reign_title').attr("value", returnResidentialBuildingLeaseAgreement.houseCompletionReignTitle)

    $('#house_completion_time').attr("value", returnResidentialBuildingLeaseAgreement.houseCompletionTime)

    $('#house_construction_reign_title').attr("value", returnResidentialBuildingLeaseAgreement.houseConstructionReignTitle)
    $('#house_construction_time').attr("value", returnResidentialBuildingLeaseAgreement.houseConstructionTime)

    if (returnResidentialBuildingLeaseAgreement.houseCompletionReignTitle === "" ||
        returnResidentialBuildingLeaseAgreement.houseCompletionTime === "" ||
        returnResidentialBuildingLeaseAgreement.houseConstructionReignTitle === "" ||
        returnResidentialBuildingLeaseAgreement.houseConstructionTime === "") {
        $('#house_construction_time_checkbox').attr("checked", true)
    }

    $('#house_room_number').attr("value", returnResidentialBuildingLeaseAgreement.houseRoomNumber)
    $('#house_room_layout').attr("value", returnResidentialBuildingLeaseAgreement.houseRoomLayout)
    $('#house_floor_space').attr("value", returnResidentialBuildingLeaseAgreement.houseFloorSpace)
    $('#house_balcony_area').attr("value", returnResidentialBuildingLeaseAgreement.houseBalconyArea)

    //===================================================================================
    let electricityWithoutWithRadio = returnResidentialBuildingLeaseAgreement.electricityWithoutWith
    switch (electricityWithoutWithRadio) {
        case false: $('#without-1').attr("checked", true); break;
        case true: $('#with-1').attr("checked", true); break;
    }
    //===================================================================================

    $('#electricity_format_ampere').attr("value", returnResidentialBuildingLeaseAgreement.electricityFormatAmpere)

    //=======================================================================

    if (returnResidentialBuildingLeaseAgreement.electricityFormatMeter1 === '專用') {
        $('#electricity_format_meter_1').attr("checked", true)
    }

    if (returnResidentialBuildingLeaseAgreement.electricityFormatMeter2 === '子メーター') {
        $('#electricity_format_meter_2').attr("checked", true)
    }

    if (returnResidentialBuildingLeaseAgreement.electricityFormatMeter3 === '割当') {
        $('#electricity_format_meter_3').attr("checked", true)
    }

    //=======================================================================

    $('#electricity_note').attr("value", returnResidentialBuildingLeaseAgreement.electricityNote)

    //=======================================================================
    // gasWithoutWith

    let gasWithoutWithRadio = returnResidentialBuildingLeaseAgreement.gasWithoutWith
    switch (gasWithoutWithRadio) {
        case false: $('#without-2').attr("checked", true); break;
        case true: $('#with-2').attr("checked", true); break;
    }


    // gasFormat1

    if (returnResidentialBuildingLeaseAgreement.gasFormat1 === '都市ガス') {
        $('#gas_format_1').attr("checked", true)
    }

    // gasFormat2
    if (returnResidentialBuildingLeaseAgreement.gasFormat2 === 'プロパンガス') {
        $('#gas_format_2').attr("checked", true)
    }

    // gasFormatMeter1

    if (returnResidentialBuildingLeaseAgreement.gasFormatMeter1 === '専用') {
        $('#gas_format_meter_1').attr("checked", true)
    }

    // gasFormatMeter2

    if (returnResidentialBuildingLeaseAgreement.gasFormatMeter2 === '子メーター') {
        $('#gas_format_meter_2').attr("checked", true)
    }

    // gasFormatMeter3

    if (returnResidentialBuildingLeaseAgreement.gasFormatMeter3 === '割当') {
        $('#gas_format_meter_3').attr("checked", true)
    }

    //=======================================================================

    $('#gas_note').attr("value", returnResidentialBuildingLeaseAgreement.gasNote)

    //=======================================================================
    // stoveWithoutWith

    let stoveWithoutWithRadio = returnResidentialBuildingLeaseAgreement.stoveWithoutWith
    switch (stoveWithoutWithRadio) {
        case false: $('#without-3').attr("checked", true); break;
        case true: $('#with-3').attr("checked", true); break;
    }

    // stoveFormat1

    if (returnResidentialBuildingLeaseAgreement.stoveFormat1 === 'ガス') {
        $('#stove_format_1').attr("checked", true)
    }

    // stoveFormat2
    if (returnResidentialBuildingLeaseAgreement.stoveFormat2 === '電気') {
        $('#stove_format_2').attr("checked", true)
    }

    // stoveFormat3

    if (returnResidentialBuildingLeaseAgreement.stoveFormat3 === 'IH調理器') {
        $('#stove_format_3').attr("checked", true)
    }

    //=======================================================================

    $('#stove_note').attr("value", returnResidentialBuildingLeaseAgreement.stoveNote)

    //=======================================================================

    // aqueductWithoutWith

    let aqueductWithoutWithRadio = returnResidentialBuildingLeaseAgreement.aqueductWithoutWith
    switch (aqueductWithoutWithRadio) {
        case false: $('#without-4').attr("checked", true); break;
        case true: $('#with-4').attr("checked", true); break;
    }

    // aqueductFormat1

    if (returnResidentialBuildingLeaseAgreement.aqueductFormat1 === '水道本管より直結') {
        $('#aqueduct_format_1').attr("checked", true)
    }

    // aqueductFormat2

    if (returnResidentialBuildingLeaseAgreement.aqueductFormat2 === '受水槽') {
        $('#aqueduct_format_2').attr("checked", true)
    }

    // aqueductFormat3

    if (returnResidentialBuildingLeaseAgreement.aqueductFormat3 === '井戸水') {
        $('#aqueduct_format_3').attr("checked", true)
    }

    //=======================================================================

    $('#aqueduct_note').attr("value", returnResidentialBuildingLeaseAgreement.aqueductNote)

    //=======================================================================

    // sewerageWithoutWith

    let sewerageWithoutWithRadio = returnResidentialBuildingLeaseAgreement.sewerageWithoutWith
    switch (sewerageWithoutWithRadio) {
        case false: $('#without-5').attr("checked", true); break;
        case true: $('#with-5').attr("checked", true); break;
    }

    // sewerageFormat1

    if (returnResidentialBuildingLeaseAgreement.sewerageFormat1 === '公共下水道') {
        $('#sewerage_format_1').attr("checked", true)
    }

    // sewerageFormat2
    if (returnResidentialBuildingLeaseAgreement.sewerageFormat2 === '浄化槽') {
        $('#sewerage_format_2').attr("checked", true)
    }

    //=======================================================================

    $('#sewerage_note').attr("value", returnResidentialBuildingLeaseAgreement.sewerageNote)

    // counterWithoutWith
    let counterWithoutWithRadio = returnResidentialBuildingLeaseAgreement.counterWithoutWith
    switch (counterWithoutWithRadio) {
        case false: $('#without-6').attr("checked", true); break;
        case true: $('#with-6').attr("checked", true); break;
    }

    // counterFormat1

    if (returnResidentialBuildingLeaseAgreement.counterFormat1 === 'オーブン') {
        $('#counter_format_1').attr("checked", true)
    }

    // counterFormat2
    if (returnResidentialBuildingLeaseAgreement.counterFormat2 === '食器棚') {
        $('#counter_format_2').attr("checked", true)
    }

    // counterFormat3
    if (returnResidentialBuildingLeaseAgreement.counterFormat3 === '換気扇') {
        $('#counter_format_3').attr("checked", true)
    }

    // counterFormat4
    if (returnResidentialBuildingLeaseAgreement.counterFormat4 === 'レンジフード') {
        $('#counter_format_4').attr("checked", true)
    }

    //=======================================================================

    $('#counter_note').attr("value", returnResidentialBuildingLeaseAgreement.counterNote)

    //=======================================================================

    // toiletWithoutWith
    let toiletWithoutWithRadio = returnResidentialBuildingLeaseAgreement.toiletWithoutWith
    switch (toiletWithoutWithRadio) {
        case false: $('#without-7').attr("checked", true); break;
        case true: $('#with-7').attr("checked", true); break;
    }

    // toiletFormat1
    let toiletFormat1Radio = returnResidentialBuildingLeaseAgreement.toiletFormat1
    switch (toiletFormat1Radio) {
        case '専用': $('#toilet-1-1').attr("checked", true); break;
        case '共用': $('#toilet-1-2').attr("checked", true); break;
    }

    // toiletFormat2
    let toiletFormat2Radio = returnResidentialBuildingLeaseAgreement.toiletFormat2
    switch (toiletFormat2Radio) {
        case '水洗': $('#toilet-2-1').attr("checked", true); break;
        case '汲取式': $('#toilet-2-2').attr("checked", true); break;
    }

    // toiletFormat3
    let toiletFormat3Radio = returnResidentialBuildingLeaseAgreement.toiletFormat3
    switch (toiletFormat3Radio) {
        case '一体': $('#toilet-3-1').attr("checked", true); break;
        case '別': $('#toilet-3-2').attr("checked", true); break;
    }

    // toiletFormat4

    if (returnResidentialBuildingLeaseAgreement.toiletFormat4 === '洗浄便座') {
        $('#toilet_format_4').attr("checked", true)
    }

    // toiletFormat5
    if (returnResidentialBuildingLeaseAgreement.toiletFormat5 === '暖房便座') {
        $('#toilet_format_5').attr("checked", true)
    }

    //=======================================================================

    $('#toilet_note').attr("value", returnResidentialBuildingLeaseAgreement.toiletNote)

    //=======================================================================

    // bathroomWithoutWith
    let bathroomWithoutWithRadio = returnResidentialBuildingLeaseAgreement.bathroomWithoutWith
    switch (bathroomWithoutWithRadio) {
        case false: $('#without-8').attr("checked", true); break;
        case true: $('#with-8').attr("checked", true); break;
    }

    // bathroomFormatShowerWithoutWith
    let bathroomFormatShowerWithoutWithRadio = returnResidentialBuildingLeaseAgreement.bathroomFormatShowerWithoutWith
    switch (bathroomFormatShowerWithoutWithRadio) {
        case '無': $('#no').attr("checked", true); break;
        case '有': $('#yes').attr("checked", true); break;
    }

    // bathroomFormatOther

    if (returnResidentialBuildingLeaseAgreement.bathroomFormatOther !== "") {
        $('#bathroom_format_other').attr("checked", true)
        $('#bathroom_shower_other').attr("value", returnResidentialBuildingLeaseAgreement.bathroomFormatOther)
    }

    //=======================================================================

    $('#bathroom_note').attr("value", returnResidentialBuildingLeaseAgreement.bathroomNote)

    //=======================================================================

    // sinkWithoutWith
    let sinkWithoutWithRadio = returnResidentialBuildingLeaseAgreement.sinkWithoutWith
    switch (sinkWithoutWithRadio) {
        case false: $('#without-9').attr("checked", true); break;
        case true: $('#with-9').attr("checked", true); break;
    }

    // sinkFormat1

    if (returnResidentialBuildingLeaseAgreement.sinkFormat1 === '鏡') {
        $('#sink_format_1').attr("checked", true)
    }

    // sinkFormat2
    if (returnResidentialBuildingLeaseAgreement.sinkFormat2 === 'コンセント') {
        $('#sink_format_2').attr("checked", true)
    }

    // sinkFormat3
    if (returnResidentialBuildingLeaseAgreement.sinkFormat3 === 'シャワー') {
        $('#sink_format_3').attr("checked", true)
    }

    if (returnResidentialBuildingLeaseAgreement.sinkFormat4Other !== "") {
        $('#sink_format_4_other').attr("checked", true)
        $('#sink_other').attr("value", returnResidentialBuildingLeaseAgreement.sinkFormat4Other)
    }

    //=======================================================================

    $('#sink_note').attr("value", returnResidentialBuildingLeaseAgreement.sinkNote)

    //=======================================================================

    // washingMachinePlaceWithoutWith
    let washingMachinePlaceWithoutWithRadio = returnResidentialBuildingLeaseAgreement.washingMachinePlaceWithoutWith
    switch (washingMachinePlaceWithoutWithRadio) {
        case false: $('#without-10').attr("checked", true); break;
        case true: $('#with-10').attr("checked", true); break;
    }

    // washingMachinePlaceFormat
    let washingMachinePlaceFormatRadio = returnResidentialBuildingLeaseAgreement.washingMachinePlaceFormat
    switch (washingMachinePlaceFormatRadio) {
        case '室内': $('#washing_machine_place_1-1').attr("checked", true); break;
        case 'バルコニー': $('#washing_machine_place_1-2').attr("checked", true); break;
        case '廊下': $('#washing_machine_place_1-3').attr("checked", true); break;
    }

    // washingMachinePanWithoutWith
    let washingMachinePanWithoutWithRadio = returnResidentialBuildingLeaseAgreement.washingMachinePanWithoutWith
    switch (washingMachinePanWithoutWithRadio) {
        case '無': $('#washing_machine_place_2-1').attr("checked", true); break;
        case '有': $('#washing_machine_place-2-2').attr("checked", true); break;
    }

    //=======================================================================

    $('#washing_machine_place_note').attr("value", returnResidentialBuildingLeaseAgreement.washingMachinePlaceNote)

    //=======================================================================

    // waterHeaterWithoutWith
    let waterHeaterWithoutWithRadio = returnResidentialBuildingLeaseAgreement.waterHeaterWithoutWith
    switch (waterHeaterWithoutWithRadio) {
        case false: $('#without-11').attr("checked", true); break;
        case true: $('#with-11').attr("checked", true); break;
    }

    // waterHeater
    let waterHeaterRadio = returnResidentialBuildingLeaseAgreement.waterHeater
    switch (waterHeaterRadio) {
        case 'ガス': $('#gas-3').attr("checked", true); break;
        case '電気': $('#electricity-2').attr("checked", true); break;
    }

    // waterHeaterFormat1

    if (returnResidentialBuildingLeaseAgreement.waterHeaterFormat1 === '台所') {
        $('#water_heater_format_1').attr("checked", true)
    }

    // waterHeaterFormat2
    if (returnResidentialBuildingLeaseAgreement.waterHeaterFormat2 === '浴室') {
        $('#water_heater_format_2').attr("checked", true)
    }

    // waterHeaterForma3
    if (returnResidentialBuildingLeaseAgreement.waterHeaterFormat3 === '洗面所') {
        $('#water_heater_format_3').attr("checked", true)
    }

    // waterHeaterFormat4
    if (returnResidentialBuildingLeaseAgreement.waterHeaterFormat4 === '洗濯') {
        $('#water_heater_format_4').attr("checked", true)
    }

    // waterHeaterFormat5Other

    if (returnResidentialBuildingLeaseAgreement.waterHeaterFormat5Other !== "") {
        $('#water_heater_format_5_other').attr("checked", true)
        $('#hot_water_point_other').attr("value", returnResidentialBuildingLeaseAgreement.waterHeaterFormat5Other)
    }

    //=======================================================================

    $('#water_heater_note').attr("value", returnResidentialBuildingLeaseAgreement.waterHeaterNote)

    //=======================================================================

    // airConditioningEquipmentWithoutWith
    let airConditioningEquipmentWithoutWithRadio = returnResidentialBuildingLeaseAgreement.airConditioningEquipmentWithoutWith
    switch (airConditioningEquipmentWithoutWithRadio) {
        case false: $('#without-12').attr("checked", true); break;
        case true: $('#with-12').attr("checked", true); break;
    }

    // airConditioner
    $('#air_conditioner').attr("value", returnResidentialBuildingLeaseAgreement.airConditioner)

    // airConditionerPlumbingSleeveWithoutWith
    let airConditionerPlumbingSleeveWithoutWithRadio = returnResidentialBuildingLeaseAgreement.airConditionerPlumbingSleeveWithoutWith
    switch (airConditionerPlumbingSleeveWithoutWithRadio) {
        case '無': $('#plumbing_sleeve_1').attr("checked", true); break;
        case '有': $('#plumbing_sleeve_2').attr("checked", true); break;
    }

    // airConditionerFormat1

    if (returnResidentialBuildingLeaseAgreement.airConditionerFormat1 === 'セントラルヒーティング') {
        $('#air_conditioner_format_1').attr("checked", true)
    }

    // airConditionerFormat2Other

    if (returnResidentialBuildingLeaseAgreement.airConditionerFormat2Other !== "") {
        $('#air_conditioner_format_2_other').attr("checked", true)
        $('#air_conditioner_other').attr("value", returnResidentialBuildingLeaseAgreement.airConditionerFormat2Other)
    }



    $('#air_conditioning_equipment_note').attr("value", returnResidentialBuildingLeaseAgreement.airConditioningEquipmentNote)

    //=======================================================================

    let lightWithoutWithRadio = returnResidentialBuildingLeaseAgreement.lightWithoutWith
    switch (lightWithoutWithRadio) {
        case false: $('#without-13').attr("checked", true); break;
        case true: $('#with-13').attr("checked", true); break;
    }


    $('#light_format').attr("value", returnResidentialBuildingLeaseAgreement.lightFormat)
    $('#light_note').attr("value", returnResidentialBuildingLeaseAgreement.lightNote)

    let furnitureWithoutWithRadio = returnResidentialBuildingLeaseAgreement.furnitureWithoutWith
    switch (furnitureWithoutWithRadio) {
        case false: $('#without-14').attr("checked", true); break;
        case true: $('#with-14').attr("checked", true); break;
    }


    if (returnResidentialBuildingLeaseAgreement.furnitureFormat1 === '下駄箱') {
        $('#furniture_format_1').attr("checked", true)
    }


    if (returnResidentialBuildingLeaseAgreement.furnitureFormat2 === 'クローゼット') {
        $('#furniture_format_2').attr("checked", true)
    }


    if (returnResidentialBuildingLeaseAgreement.furnitureFormat3 === '冷蔵庫') {
        $('#furniture_format_3').attr("checked", true)
    }


    if (returnResidentialBuildingLeaseAgreement.furnitureFormat4Other !== "") {
        $('#furniture_format_4_other').attr("checked", true)
        $('#furniture_other').attr("value", returnResidentialBuildingLeaseAgreement.furnitureFormat4Other)
    }



    $('#furniture_note').attr("value", returnResidentialBuildingLeaseAgreement.furnitureNote)


    let tvWithoutWithRadio = returnResidentialBuildingLeaseAgreement.tvWithoutWith
    switch (tvWithoutWithRadio) {
        case false: $('#without-15').attr("checked", true); break;
        case true: $('#with-15').attr("checked", true); break;
    }

    $('#tv_format').attr("value", returnResidentialBuildingLeaseAgreement.tvFormat)
    $('#tv_note').attr("value", returnResidentialBuildingLeaseAgreement.tvNote)


    let catvWithoutWithRadio = returnResidentialBuildingLeaseAgreement.catvWithoutWith
    switch (catvWithoutWithRadio) {
        case false: $('#without-16').attr("checked", true); break;
        case true: $('#with-16').attr("checked", true); break;
    }


    $('#catv_format').attr("value", returnResidentialBuildingLeaseAgreement.catvFormat)
    $('#catv_note').attr("value", returnResidentialBuildingLeaseAgreement.catvNote)


    // internetWithoutWith
    let internetWithoutWithRadio = returnResidentialBuildingLeaseAgreement.internetWithoutWith
    switch (internetWithoutWithRadio) {
        case false: $('#without-17').attr("checked", true); break;
        case true: $('#with-17').attr("checked", true); break;
    }



    $('#internet_format').attr("value", returnResidentialBuildingLeaseAgreement.internetFormat)
    $('#internet_note').attr("value", returnResidentialBuildingLeaseAgreement.internetNote)


    let storehouseWithoutWithRadio = returnResidentialBuildingLeaseAgreement.storehouseWithoutWith
    switch (storehouseWithoutWithRadio) {
        case false: $('#without-18').attr("checked", true); break;
        case true: $('#with-18').attr("checked", true); break;
    }

    $('#storehouse_format').attr("value", returnResidentialBuildingLeaseAgreement.storehouseFormat)
    $('#storehouse_note').attr("value", returnResidentialBuildingLeaseAgreement.storehouseNote)


    let patioWithoutWithRadio = returnResidentialBuildingLeaseAgreement.patioWithoutWith
    switch (patioWithoutWithRadio) {
        case false: $('#without-19').attr("checked", true); break;
        case true: $('#with-19').attr("checked", true); break;
    }

    $('#patio_format').attr("value", returnResidentialBuildingLeaseAgreement.patioFormat)
    $('#patio_note').attr("value", returnResidentialBuildingLeaseAgreement.patioNote)


    let roofBalconyWithoutWithRadio = returnResidentialBuildingLeaseAgreement.roofBalconyWithoutWith
    switch (roofBalconyWithoutWithRadio) {
        case false: $('#without-20').attr("checked", true); break;
        case true: $('#with-20').attr("checked", true); break;
    }



    $('#roof_balcony_format').attr("value", returnResidentialBuildingLeaseAgreement.roofBalconyFormat)
    $('#roof_balcony_note').attr("value", returnResidentialBuildingLeaseAgreement.roofBalconyNote)


    let keyWithoutWithRadio = returnResidentialBuildingLeaseAgreement.keyWithoutWith
    switch (keyWithoutWithRadio) {
        case false: $('#without-21').attr("checked", true); break;
        case true: $('#with-21').attr("checked", true); break;
    }


    $('#key_number').attr("value", returnResidentialBuildingLeaseAgreement.keyNumber)
    $('#more_key').attr("value", returnResidentialBuildingLeaseAgreement.moreKey)
    $('#key_note').attr("value", returnResidentialBuildingLeaseAgreement.keyNote)
    $('#house_facilities_1').attr("value", returnResidentialBuildingLeaseAgreement.houseFacilities1)


    let houseFacilities1WithoutWithRadio = returnResidentialBuildingLeaseAgreement.houseFacilities1WithoutWith
    switch (houseFacilities1WithoutWithRadio) {
        case false: $('#without-22').attr("checked", true); break;
        case true: $('#with-22').attr("checked", true); break;
    }


    $('#house_facilities_1_format').attr("value", returnResidentialBuildingLeaseAgreement.houseFacilities1Format)
    $('#house_facilities_1_note').attr("value", returnResidentialBuildingLeaseAgreement.houseFacilities1Note)
    $('#house_facilities_2').attr("value", returnResidentialBuildingLeaseAgreement.houseFacilities2)


    let houseFacilities2WithoutWithRadio = returnResidentialBuildingLeaseAgreement.houseFacilities2WithoutWith
    switch (houseFacilities2WithoutWithRadio) {
        case false: $('#without-23').attr("checked", true); break;
        case true: $('#with-23').attr("checked", true); break;
    }


    $('#house_facilities_2_format').attr("value", returnResidentialBuildingLeaseAgreement.houseFacilities2Format)
    $('#house_facilities_2_note').attr("value", returnResidentialBuildingLeaseAgreement.houseFacilities2Note)
    $('#house_facilities_3').attr("value", returnResidentialBuildingLeaseAgreement.houseFacilities3)


    // houseFacilities3WithoutWith
    let houseFacilities3WithoutWithRadio = returnResidentialBuildingLeaseAgreement.houseFacilities3WithoutWith
    switch (houseFacilities3WithoutWithRadio) {
        case false: $('#without-24').attr("checked", true); break;
        case true: $('#with-24').attr("checked", true); break;
    }


    $('#house_facilities_3_format').attr("value", returnResidentialBuildingLeaseAgreement.houseFacilities3Format)
    $('#house_facilities_3_note').attr("value", returnResidentialBuildingLeaseAgreement.houseFacilities3Note)


    let liftWithoutWithRadio = returnResidentialBuildingLeaseAgreement.liftWithoutWith
    switch (liftWithoutWithRadio) {
        case false: $('#without-25').attr("checked", true); break;
        case true: $('#with-25').attr("checked", true); break;
    }



    $('#lift_rent_state').attr("value", returnResidentialBuildingLeaseAgreement.liftRentState)
    $('#lift_note').attr("value", returnResidentialBuildingLeaseAgreement.liftNote)


    let electronicLockWithoutWithRadio = returnResidentialBuildingLeaseAgreement.electronicLockWithoutWith
    switch (electronicLockWithoutWithRadio) {
        case false: $('#without-26').attr("checked", true); break;
        case true: $('#with-26').attr("checked", true); break;
    }



    $('#electronic_lock_rent_state').attr("value", returnResidentialBuildingLeaseAgreement.electronicLockRentState)
    $('#electronic_lock_note').attr("value", returnResidentialBuildingLeaseAgreement.electronicLockNote)



    // mailboxWithoutWith
    let mailboxWithoutWithRadio = returnResidentialBuildingLeaseAgreement.mailboxWithoutWith
    switch (mailboxWithoutWithRadio) {
        case false: $('#without-27').attr("checked", true); break;
        case true: $('#with-27').attr("checked", true); break;
    }



    $('#mailbox_rent_state').attr("value", returnResidentialBuildingLeaseAgreement.mailboxRentState)
    $('#mailbox_note').attr("value", returnResidentialBuildingLeaseAgreement.mailboxNote)


    let deliveryBoxWithoutWithRadio = returnResidentialBuildingLeaseAgreement.deliveryBoxWithoutWith
    switch (deliveryBoxWithoutWithRadio) {
        case false: $('#without-28').attr("checked", true); break;
        case true: $('#with-28').attr("checked", true); break;
    }


    $('#delivery_box_rent_state').attr("value", returnResidentialBuildingLeaseAgreement.deliveryBoxRentState)
    $('#delivery_box_note').attr("value", returnResidentialBuildingLeaseAgreement.deliveryBoxNote)


    let trunkRoomWithoutWithRadio = returnResidentialBuildingLeaseAgreement.trunkRoomWithoutWith
    switch (trunkRoomWithoutWithRadio) {
        case false: $('#without-29').attr("checked", true); break;
        case true: $('#with-29').attr("checked", true); break;
    }


    if (returnResidentialBuildingLeaseAgreement.trunkRoomHaveOrHavent === '不可') {
        $('#dont-have-1').attr("checked", true);

    } else {
        $('#have-1').attr("checked", true);
        $('#trunk_room_money').attr("value", returnResidentialBuildingLeaseAgreement.trunkRoomHaveOrHavent);
    }


    $('#trunk_room_note').attr("value", returnResidentialBuildingLeaseAgreement.trunkRoomNote)


    let parkingGarageWithoutWithRadio = returnResidentialBuildingLeaseAgreement.parkingGarageWithoutWith
    switch (parkingGarageWithoutWithRadio) {
        case false: $('#without-30').attr("checked", true); break;
        case true: $('#with-30').attr("checked", true); break;
    }


    if (returnResidentialBuildingLeaseAgreement.parkingGarageHaveOrHavent === '不可') {
        $('#dont-have-2').attr("checked", true);

    } else {
        $('#have-2').attr("checked", true);
        $('#parking_garage_money').attr("value", returnResidentialBuildingLeaseAgreement.parkingGarageHaveOrHavent);
    }


    $('#parking_garage_note').attr("value", returnResidentialBuildingLeaseAgreement.parkingGarageNote)

    let bicycleParkingWithoutWithRadio = returnResidentialBuildingLeaseAgreement.bicycleParkingWithoutWith
    switch (bicycleParkingWithoutWithRadio) {
        case false: $('#without-31').attr("checked", true); break;
        case true: $('#with-31').attr("checked", true); break;
    }


    if (returnResidentialBuildingLeaseAgreement.bicycleParkingHaveOrHavent === '不可') {
        $('#dont-have-3').attr("checked", true);

    } else {
        $('#have-3').attr("checked", true);
        $('#bicycle_parking_money').attr("value", returnResidentialBuildingLeaseAgreement.bicycleParkingHaveOrHavent);
    }


    $('#bicycle_parking_note').attr("value", returnResidentialBuildingLeaseAgreement.bicycleParkingNote)


    let scooterParkingWithoutWithRadio = returnResidentialBuildingLeaseAgreement.scooterParkingWithoutWith
    switch (scooterParkingWithoutWithRadio) {
        case false: $('#without-32').attr("checked", true); break;
        case true: $('#with-32').attr("checked", true); break;
    }


    if (returnResidentialBuildingLeaseAgreement.scooterParkingHaveOrHavent === '不可') {
        $('#dont-have-4').attr("checked", true);

    } else {
        $('#have-4').attr("checked", true);
        $('#scooter_parking_money').attr("value", returnResidentialBuildingLeaseAgreement.scooterParkingHaveOrHavent);
    }


    $('#scooter_parking_note').attr("value", returnResidentialBuildingLeaseAgreement.scooterParkingNote)
    $('#public_facilities_1').attr("value", returnResidentialBuildingLeaseAgreement.publicFacilities1)


    let publicFacilities1WithoutWithRadio = returnResidentialBuildingLeaseAgreement.publicFacilities1WithoutWith
    switch (publicFacilities1WithoutWithRadio) {
        case false: $('#without-33').attr("checked", true); break;
        case true: $('#with-33').attr("checked", true); break;
    }


    $('#public_facilities_1_rent_state').attr("value", returnResidentialBuildingLeaseAgreement.publicFacilities1RentState)
    $('#public_facilities_1_note').attr("value", returnResidentialBuildingLeaseAgreement.publicFacilities1Note)
    $('#public_facilities_2').attr("value", returnResidentialBuildingLeaseAgreement.publicFacilities2)


    let publicFacilities2WithoutWithRadio = returnResidentialBuildingLeaseAgreement.publicFacilities2WithoutWith
    switch (publicFacilities2WithoutWithRadio) {
        case false: $('#without-34').attr("checked", true); break;
        case true: $('#with-34').attr("checked", true); break;
    }


    $('#public_facilities_2_rent_state').attr("value", returnResidentialBuildingLeaseAgreement.publicFacilities2RentState)
    $('#public_facilities_2_note').attr("value", returnResidentialBuildingLeaseAgreement.publicFacilities2Note)
    $('#public_facilities_note').attr("value", returnResidentialBuildingLeaseAgreement.publicFacilitiesNote)


    $('#contract_start_time').attr("value", returnContractHistory.contractStartTime)
    $('#contract_end_time').attr("value", returnContractHistory.contractEndTime)

    $('#contract_time').attr("value", returnContractHistory.contractTime)

    $('#delivery_date_of_contract_time_object').attr("value", returnContractHistory.deliveryDateOfContractTimeObject)

    $('#monthly').attr("value", returnContractHistory.monthly)
    $('#rent_payment_deadline_month').attr("value", returnContractHistory.rentPaymentDeadlineMonth)
    $('#rent_payment_deadline_date').attr("value", returnContractHistory.rentPaymentDeadlineDate)
    $('#administration_fee').attr("value", returnContractHistory.administrationFee)
    $('#administration_fee_month').attr("value", returnContractHistory.administrationFeeMonth)
    $('#administration_fee_date').attr("value", returnContractHistory.administrationFeeDate)
    $('#security_deposit_month').attr("value", returnContractHistory.securityDepositMonth)
    $('#security_deposit_date').attr("value", returnContractHistory.securityDepositDate)
    $('#parking_fee').attr("value", returnContractHistory.parkingFee)
    $('#parking_fee_note').attr("value", returnContractHistory.parkingFeeNote)
    $('#ancillary_facility_fee').attr("value", returnContractHistory.ancillaryFacilityFee)
    $('#ancillary_facility_fee_note').attr("value", returnContractHistory.ancillaryFacilityFeeNote)
    $('#cash_gift').attr("value", returnContractHistory.cashGift)
    $('#cash_gift_note').attr("value", returnContractHistory.cashGiftNote)

    $('#monthly_payment_method').attr("value", returnContractHistory.monthlyPaymentMethod)

    // monthlyPaymentMethodOther

    if (returnContractHistory.monthlyPaymentMethodOther !== "") {
        $('#monthly_payment_method_other').attr("checked", true)
        $('#monthly_payment_method_other_text').attr("value", returnContractHistory.monthlyPaymentMethodOther)
    }


    $('#beneficiary_bank_and_branch_name').attr("value", returnContractHistory.beneficiaryBankAndBranchName)
    $('#account_type').attr("value", returnContractHistory.accountType)
    $('#account_number').attr("value", returnContractHistory.accountNumber)
    $('#account_holder').attr("value", returnContractHistory.accountHolder)
    $('#transfer_fee_bearer').attr("value", returnContractHistory.transferFeeBearer)
    $('#bearer_address').attr("value", returnContractHistory.bearerAddress)
    $('#keys_lend_and_number_1').attr("value", returnContractHistory.keysLendAndNumber1)
    $('#keys_lend_and_number_2').attr("value", returnContractHistory.keysLendAndNumber2)
    $('#keys_lend_and_number_3').attr("value", returnContractHistory.keysLendAndNumber3)


    $('#landlord_name').attr("value", returnResidentialBuildingLeaseAgreement.landlordName)
    $('#landlord_phone').attr("value", returnResidentialBuildingLeaseAgreement.landlordPhone)
    $('#landlord_address').attr("value", returnResidentialBuildingLeaseAgreement.landlordAddress)
    $('#real_estate_agency_name').attr("value", returnResidentialBuildingLeaseAgreement.realEstateAgencyName)
    $('#real_estate_agency_phone').attr("value", returnResidentialBuildingLeaseAgreement.realEstateAgencyPhone)
    $('#real_estate_agency_address').attr("value", returnResidentialBuildingLeaseAgreement.realEstateAgencyAddress)
    $('#registration_system').attr("value", returnResidentialBuildingLeaseAgreement.registrationSystem)
    $('#registration_number').attr("value", returnResidentialBuildingLeaseAgreement.registrationNumber)
    $('#administrant_name').attr("value", returnResidentialBuildingLeaseAgreement.administrantName)
    $('#house_owner_address').attr("value", returnResidentialBuildingLeaseAgreement.houseOwnerAddress)
    $('#house_owner_name').attr("value", returnResidentialBuildingLeaseAgreement.houseOwnerName)
    $('#maximum_amount').attr("value", returnResidentialBuildingLeaseAgreement.maximumAmount)

    $('#tenant_name').attr("value", returnContractHistory.tenantName)
    $('#tenant_age').attr("value", returnContractHistory.tenantAge)
    $('#resident_name_1').attr("value", returnContractHistory.residentName1)
    $('#resident_age_1').attr("value", returnContractHistory.residentAge1)
    $('#resident_name_2').attr("value", returnContractHistory.residentName2)
    $('#resident_age_2').attr("value", returnContractHistory.residentAge2)
    $('#resident_name_3').attr("value", returnContractHistory.residentName3)
    $('#resident_age_3').attr("value", returnContractHistory.residentAge3)
    $('#resident_name_4').attr("value", returnContractHistory.residentName4)
    $('#resident_age_4').attr("value", returnContractHistory.residentAge4)
    $('#resident_name_5').attr("value", returnContractHistory.residentName5)
    $('#resident_age_5').attr("value", returnContractHistory.residentAge5)
    $('#resident_name_6').attr("value", returnContractHistory.residentName6)
    $('#resident_age_6').attr("value", returnContractHistory.residentAge6)
    $('#emergency_contact_name').attr("value", returnContractHistory.emergencyContactName)
    $('#emergency_contact_relationship_with_borrowers').attr("value", returnContractHistory.emergencyContactRelationshipWithBorrowers)
    $('#emergency_contact_address').attr("value", returnContractHistory.emergencyContactAddress)
    $('#emergency_contact_address_phone').attr("value", returnContractHistory.emergencyContactAddressPhone)
    $('#emergency_contact_workplace').attr("value", returnContractHistory.emergencyContactWorkplace)
    $('#emergency_contact_workplace_work_phone').attr("value", returnContractHistory.emergencyContactWorkplaceWorkPhone)
    $('#emergency_contact_mobile_number').attr("value", returnContractHistory.emergencyContactMobileNumber)

    let renewalAmountWithoutWithRadio = returnResidentialBuildingLeaseAgreement.renewalAmountWithoutWith
    switch (renewalAmountWithoutWithRadio) {
        case false: $('#without-35').attr("checked", true); break;
        case true: $('#with-35').attr("checked", true); break;
    }

    // renewalAmountMonth

    if (returnResidentialBuildingLeaseAgreement.renewalAmountMonth !== "") {
        $('#renewal_amount_month_checkbox').attr("checked", true)
        $('#renewal_amount_month').attr("value", returnResidentialBuildingLeaseAgreement.renewalAmountMonth)
    }

    // renewalAmountDate

    if (returnResidentialBuildingLeaseAgreement.renewalAmountDate !== "") {
        $('#renewal_amount_date_checkbox').attr("checked", true)
        $('#renewal_amount_date').attr("value", returnResidentialBuildingLeaseAgreement.renewalAmountDate)
    }

    //=======================================================================

    $('#renewal_amount_without_note').attr("value", returnResidentialBuildingLeaseAgreement.renewalAmountWithoutNote)
    $('#special_terms').attr("value", returnResidentialBuildingLeaseAgreement.specialTerms)

    $('#joint_guarantee_contract_date').attr("value", returnContractHistory.jointGuaranteeContractDate)


    $('#landlord_address_2').attr("value", returnContractHistory.landlordAddress)
    $('#landlord_name_2').attr("value", returnContractHistory.landlordName)
    $('#landlord_phone_2').attr("value", returnContractHistory.landlordPhone)
    $('#tenant_address').attr("value", returnContractHistory.tenantAddress)
    $('#tenant_name_2').attr("value", returnContractHistory.tenantName)
    $('#tenant_phone').attr("value", returnContractHistory.tenantPhone)
    $('#joint_guarantor_address').attr("value", returnContractHistory.jointGuarantorAddress)
    $('#joint_guarantor_name').attr("value", returnContractHistory.jointGuarantorName)
    $('#joint_guarantor_phone').attr("value", returnContractHistory.jointGuarantorPhone)
    $('#maximum_amount_2').attr("value", returnContractHistory.maximumAmount)

}


