// 用於處理事件管理
$(document).ready(function () {


    // click點擊，function方法(點擊後 -> 執行後面的方法)。可以放多個按鈕
    $('#btn').click(function (e) {

        e.preventDefault()
        //上方為程式運算編寫處

        //宣告物件語法
        let houseName = $('#house_name').val()

        let houseStairs = $('#house_stairs').val()

        let houseRoom = $('#house_room').val()

        let houseAddress = $('#house_address').val()

        let houseRegistry = $('#house_registry').val()

        let houseTypes = $('input:radio[name = "house_types"]:checked').val()
        if (houseTypes === "その他") {
            houseTypes = $("#house_types_other").val()
        }

        // houseTypesCheckbox為 その他 的checkbox true false 因此不需取值

        // let houseTypesCheckbox = $("#house_types_checkbox").is(":checked");
        // if (houseTypesCheckbox) {

        //     let houseTypesOther = $("#house_types_other").val()
        //     console.log(houseTypesOther)
        // }

        let houseStructure = $('#house_structure').val()

        let houseHouseholds = $('#house_households').val()

        let houseCompletionReignTitle = $('#house_completion_reign_title').val()

        let houseCompletionTime = $('#house_completion_time').val()

        let houseConstructionReignTitle = $('#house_construction_reign_title').val()

        let houseConstructionTime = $('#house_construction_time').val()


        if ($("#house_construction_time_checkbox").is(":checked")) {

            houseCompletionReignTitle = "",
                houseCompletionTime = "",
                houseConstructionReignTitle = "",
                houseConstructionTime = ""
        }

        let houseRoomNumber = $('#house_room_number').val()

        let houseRoomLayout = $('#house_room_layout').val()

        let houseFloorSpace = $('#house_floor_space').val()

        let houseBalconyArea = $('#house_balcony_area').val()

        let electricityWithoutWith = $('input:radio[name="electricity_without_with"]:checked').val()

        let electricityFormatAmpere = $('#electricity_format_ampere').val()

        if ($("#electricity_format_meter_1").is(":checked")) {

            electricityFormatMeter1 = $("#electricity_format_meter_1").val()
        } else {
            electricityFormatMeter1 = ""
        }

        if ($("#electricity_format_meter_2").is(":checked")) {

            electricityFormatMeter2 = $("#electricity_format_meter_2").val()
        } else {
            electricityFormatMeter2 = ""
        }

        if ($("#electricity_format_meter_3").is(":checked")) {

            electricityFormatMeter3 = $("#electricity_format_meter_3").val()
        } else {
            electricityFormatMeter3 = ""
        }

        let electricityNote = $('#electricity_note').val()

        if ($("#without-1").is(":checked")) {
            electricityFormatAmpere = "",
                electricityFormatMeter1 = "",
                electricityFormatMeter2 = "",
                electricityFormatMeter3 = "",
                electricityNote = ""
        }

        let gasWithoutWith = $('input:radio[name="gas_without_with"]:checked').val()

        if ($("#gas_format_1").is(":checked")) {

            gasFormat1 = $("#gas_format_1").val()
        } else {
            gasFormat1 = ""
        }

        if ($("#gas_format_2").is(":checked")) {

            gasFormat2 = $("#gas_format_2").val()
        } else {
            gasFormat2 = ""
        }

        if ($("#gas_format_meter_1").is(":checked")) {

            gasFormatMeter1 = $("#gas_format_meter_1").val()
        } else {
            gasFormatMeter1 = ""
        }

        if ($("#gas_format_meter_2").is(":checked")) {

            gasFormatMeter2 = $("#gas_format_meter_2").val()
        } else {
            gasFormatMeter2 = ""
        }

        if ($("#gas_format_meter_3").is(":checked")) {

            gasFormatMeter3 = $("#gas_format_meter_3").val()
        } else {
            gasFormatMeter3 = ""
        }

        let gasNote = $('#gas_note').val()


        if ($("#without-2").is(":checked")) {
            gasFormat1 = "",
                gasFormat2 = "",
                gasFormatMeter1 = "",
                gasFormatMeter2 = "",
                gasFormatMeter3 = "",
                gasNote = ""
        }


        let stoveWithoutWith = $('input:radio[name = "stove_without_with"]:checked').val()

        if ($("#stove_format_1").is(":checked")) {

            stoveFormat1 = $("#stove_format_1").val()
        } else {
            stoveFormat1 = ""
        }

        if ($("#stove_format_2").is(":checked")) {

            stoveFormat2 = $("#stove_format_2").val()
        } else {
            stoveFormat2 = ""
        }

        if ($("#stove_format_3").is(":checked")) {

            stoveFormat3 = $("#stove_format_3").val()
        } else {
            stoveFormat3 = ""
        }

        let stoveNote = $('#stove_note').val()

        if ($("#without-3").is(":checked")) {
            stoveFormat1 = "",
                stoveFormat2 = "",
                stoveFormat3 = "",
                stoveNote = ""
        }

        let aqueductWithoutWith = $('input:radio[name = "aqueduct_without_with"]:checked').val()

        if ($("#aqueduct_format_1").is(":checked")) {

            aqueductFormat1 = $("#aqueduct_format_1").val()
        } else {
            aqueductFormat1 = ""
        }

        if ($("#aqueduct_format_2").is(":checked")) {

            aqueductFormat2 = $("#aqueduct_format_2").val()
        } else {
            aqueductFormat2 = ""
        }

        if ($("#aqueduct_format_3").is(":checked")) {

            aqueductFormat3 = $("#aqueduct_format_3").val()
        } else {
            aqueductFormat3 = ""
        }

        let aqueductNote = $('#aqueduct_note').val()

        if ($("#without-4").is(":checked")) {
            aqueductFormat1 = "",
                aqueductFormat2 = "",
                aqueductFormat3 = "",
                aqueductNote = ""
        }

        let sewerageWithoutWith = $('input:radio[name = "sewerage_without_with"]:checked').val()

        if ($("#sewerage_format_1").is(":checked")) {

            sewerageFormat1 = $("#sewerage_format_1").val()
        } else {
            sewerageFormat1 = ""
        }

        if ($("#sewerage_format_2").is(":checked")) {

            sewerageFormat2 = $("#sewerage_format_2").val()
        } else {
            sewerageFormat2 = ""
        }

        let sewerageNote = $('#sewerage_note').val()

        if ($("#without-5").is(":checked")) {
            sewerageFormat1 = "",
                sewerageFormat2 = "",
                sewerageNote = ""
        }

        let counterWithoutWith = $('input:radio[name = "counter_without_with"]:checked').val()

        if ($("#counter_format_1").is(":checked")) {

            counterFormat1 = $("#counter_format_1").val()
        } else {
            counterFormat1 = ""
        }

        if ($("#counter_format_2").is(":checked")) {

            counterFormat2 = $("#counter_format_2").val()
        } else {
            counterFormat2 = ""
        }

        if ($("#counter_format_3").is(":checked")) {

            counterFormat3 = $("#counter_format_3").val()
        } else {
            counterFormat3 = ""
        }

        if ($("#counter_format_4").is(":checked")) {

            counterFormat4 = $("#counter_format_4").val()
        } else {
            counterFormat4 = ""
        }

        let counterNote = $('#counter_note').val()

        if ($("#without-6").is(":checked")) {
            counterFormat1 = "",
                counterFormat2 = "",
                counterFormat3 = "",
                counterFormat4 = "",
                counterNote = ""
        }

        let toiletWithoutWith = $('input:radio[name="toilet_without_with"]:checked').val()

        let toiletFormat1 = $('input:radio[name="toilet_format_1"]:checked').val()

        let toiletFormat2 = $('input:radio[name="toilet_format_2"]:checked').val()

        let toiletFormat3 = $('input:radio[name="toilet_format_3"]:checked').val()

        if ($("#toilet_format_4").is(":checked")) {

            toiletFormat4 = $("#toilet_format_4").val()
        } else {
            toiletFormat4 = ""
        }

        if ($("#toilet_format_5").is(":checked")) {

            toiletFormat5 = $("#toilet_format_5").val()
        } else {
            toiletFormat5 = ""
        }

        let toiletNote = $('#toilet_note').val()

        if ($("#without-7").is(":checked")) {
            toiletFormat1 = "",
                toiletFormat2 = "",
                toiletFormat3 = "",
                toiletFormat4 = "",
                toiletFormat5 = "",
                toiletNote = ""
        }

        let bathroomWithoutWith = $('input:radio[name = "bathroom_without_with"]:checked').val()

        let bathroomFormatShowerWithoutWith = $('input:radio[name = "bathroom_format_shower_without_with"]:checked').val()

        if ($("#bathroom_format_other").is(":checked")) {
            bathroomFormatOther = $("#bathroom_shower_other").val()
        } else {
            bathroomFormatOther = ""
        }

        let bathroomNote = $('#bathroom_note').val()

        if ($("#without-8").is(":checked")) {
            bathroomFormatShowerWithoutWith = "",
                bathroomFormatOther = "",
                bathroomNote = ""
        }

        let sinkWithoutWith = $('input:radio[name = "sink_without_with"]:checked').val()

        if ($("#sink_format_1").is(":checked")) {

            sinkFormat1 = $("#sink_format_1").val()
        } else {
            sinkFormat1 = ""
        }

        if ($("#sink_format_2").is(":checked")) {

            sinkFormat2 = $("#sink_format_2").val()
        } else {
            sinkFormat2 = ""
        }

        if ($("#sink_format_3").is(":checked")) {

            sinkFormat3 = $("#sink_format_3").val()
        } else {
            sinkFormat3 = ""
        }

        if ($("#sink_format_4_other").is(":checked")) {
            sinkFormat4Other = $("#sink_other").val()
        } else {
            sinkFormat4Other = ""
        }

        let sinkNote = $('#sink_note').val()

        if ($("#without-9").is(":checked")) {
            sinkFormat1 = "",
                sinkFormat2 = "",
                sinkFormat3 = "",
                sinkFormat4Other = "",
                sinkNote = ""
        }

        let washingMachinePlaceWithoutWith = $('input:radio[name = "washing_machine_place_without_with"]:checked').val()

        let washingMachinePlaceFormat = $('input:radio[name="washing_machine_place_format"]:checked').val()

        let washingMachinePanWithoutWith = $('input:radio[name="washing_machine_pan_without_with"]:checked').val()

        let washingMachinePlaceNote = $('#washing_machine_place_note').val()

        if ($("#without-10").is(":checked")) {
            washingMachinePlaceFormat = "",
                washingMachinePanWithoutWith = "",
                washingMachinePlaceNote = ""
        }

        let waterHeaterWithoutWith = $('input:radio[name = "water_heater_without_with"]:checked').val()

        let waterHeater = $('input:radio[name = "water_heater"]:checked').val()

        if ($("#water_heater_format_1").is(":checked")) {

            waterHeaterFormat1 = $("#water_heater_format_1").val()
        } else {
            waterHeaterFormat1 = ""
        }

        if ($("#water_heater_format_2").is(":checked")) {

            waterHeaterFormat2 = $("#water_heater_format_2").val()
        } else {
            waterHeaterFormat2 = ""
        }

        if ($("#water_heater_format_3").is(":checked")) {

            waterHeaterFormat3 = $("#water_heater_format_3").val()
        } else {
            waterHeaterFormat3 = ""
        }

        if ($("#water_heater_format_4").is(":checked")) {

            waterHeaterFormat4 = $("#water_heater_format_4").val()
        } else {
            waterHeaterFormat4 = ""
        }

        if ($("#water_heater_format_5_other").is(":checked")) {
            waterHeaterFormat5Other = $("#hot_water_point_other").val()
        } else {
            waterHeaterFormat5Other = ""
        }

        let waterHeaterNote = $('#water_heater_note').val()

        if ($("#without-11").is(":checked")) {
            waterHeater = "",
                waterHeaterFormat1 = "",
                waterHeaterFormat2 = "",
                waterHeaterFormat3 = "",
                waterHeaterFormat4 = "",
                waterHeaterFormat5Other = "",
                waterHeaterNote = ""
        }


        let airConditionerWithoutWith = $('input:radio[name = "air_conditioner_without_with"]:checked').val()

        let airConditioner = $('#air_conditioner').val()

        let airConditionerPlumbingSleeveWithoutWith = $('input:radio[name="air_conditioner_plumbing_sleeve_without_with"]:checked').val()

        if ($("#air_conditioner_format_1").is(":checked")) {

            airConditionerFormat1 = $("#air_conditioner_format_1").val()
        } else {
            airConditionerFormat1 = ""
        }

        if ($("#air_conditioner_format_2_other").is(":checked")) {
            airConditionerFormat2Other = $("#air_conditioner_other").val()
        } else {
            airConditionerFormat2Other = ""
        }

        let airConditioningEquipmentNote = $('#air_conditioning_equipment_note').val()

        if ($("#without-12").is(":checked")) {
            airConditioner = "",
                airConditionerPlumbingSleeveWithoutWith = "",
                airConditionerFormat1 = "",
                airConditionerFormat2Other = "",
                airConditioningEquipmentNote = ""
        }

        let lightWithoutWith = $('input:radio[name = "light_without_with"]:checked').val()

        let lightFormat = $('#light_format').val()

        let lightNote = $('#light_note').val()

        if ($("#without-13").is(":checked")) {
            lightFormat = "",
                lightNote = ""
        }

        let furnitureWithoutWith = $('input:radio[name = "furniture_without_with"]:checked').val()

        if ($("#furniture_format_1").is(":checked")) {

            furnitureFormat1 = $("#furniture_format_1").val()
        } else {
            furnitureFormat1 = ""
        }

        if ($("#furniture_format_2").is(":checked")) {

            furnitureFormat2 = $("#furniture_format_2").val()
        } else {
            furnitureFormat2 = ""
        }

        if ($("#furniture_format_3").is(":checked")) {

            furnitureFormat3 = $("#furniture_format_3").val()
        } else {
            furnitureFormat3 = ""
        }

        if ($("#furniture_format_4_other").is(":checked")) {
            furnitureFormat4Other = $("#furniture_other").val()
        } else {
            furnitureFormat4Other = ""
        }

        let furnitureNote = $('#furniture_note').val()

        if ($("#without-14").is(":checked")) {
            furnitureFormat1 = "",
                furnitureFormat2 = "",
                furnitureFormat3 = "",
                furnitureFormat4Other = "",
                furnitureNote = ""
        }

        let tvWithoutWith = $('input:radio[name = "tv_without_with"]:checked').val()

        let tvFormat = $('#tv_format').val()

        let tvNote = $('#tv_note').val()

        if ($("#without-15").is(":checked")) {
            tvFormat = "",
                tvNote = ""
        }

        let catvWithoutWith = $('input:radio[name = "catv_without_with"]:checked').val()

        let catvFormat = $('#catv_format').val()

        let catvNote = $('#catv_note').val()

        if ($("#without-16").is(":checked")) {
            catvFormat = "",
                catvNote = ""
        }

        let internetWithoutWith = $('input:radio[name = "internet_without_with"]:checked').val()

        let internetFormat = $('#internet_format').val()

        let internetNote = $('#internet_note').val()

        if ($("#without-17").is(":checked")) {
            internetFormat = "",
                internetNote = ""
        }


        let storehouseWithoutWith = $('input:radio[name = "storehouse_without_with"]:checked').val()

        let storehouseFormat = $('#storehouse_format').val()

        let storehouseNote = $('#storehouse_note').val()

        if ($("#without-18").is(":checked")) {
            storehouseFormat = "",
                storehouseNote = ""
        }

        let patioWithoutWith = $('input:radio[name = "patio_without_with"]:checked').val()

        let patioFormat = $('#patio_format').val()

        let patioNote = $('#patio_note').val()

        if ($("#without-19").is(":checked")) {
            patioFormat = "",
                patioNote = ""
        }

        let roofBalconyWithoutWith = $('input:radio[name = "roof_balcony_without_with"]:checked').val()

        let roofBalconyFormat = $('#roof_balcony_format').val()

        let roofBalconyNote = $('#roof_balcony_note').val()

        if ($("#without-20").is(":checked")) {
            roofBalconyFormat = "",
                roofBalconyNote = ""
        }

        let keyWithoutWith = $('input:radio[name = "key_without_with"]:checked').val()

        let keyNumber = $('#key_number').val()

        let moreKey = $('#more_key').val()

        let keyNote = $('#key_note').val()

        if ($("#without-21").is(":checked")) {
            keyNumber = "",
                moreKey = "",
                keyNote = ""
        }

        let houseFacilities1 = $('#house_facilities_1').val()

        let houseFacilities1WithoutWith = $('input:radio[name = "house_facilities_1_without_with"]:checked').val()

        let houseFacilities1Format = $('#house_facilities_1_format').val()

        let houseFacilities1Note = $('#house_facilities_1_note').val()

        if ($("#without-22").is(":checked")) {
            houseFacilities1Format = "",
                houseFacilities1Note = ""
        }

        let houseFacilities2 = $('#house_facilities_2').val()

        let houseFacilities2WithoutWith = $('input:radio[name = "house_facilities_2_without_with"]:checked').val()

        let houseFacilities2Format = $('#house_facilities_2_format').val()

        let houseFacilities2Note = $('#house_facilities_2_note').val()

        if ($("#without-23").is(":checked")) {
            houseFacilities2Format = "",
                houseFacilities2Note = ""
        }

        let houseFacilities3 = $('#house_facilities_3').val()

        let houseFacilities3WithoutWith = $('input:radio[name = "house_facilities_3_without_with"]:checked').val()

        let houseFacilities3Format = $('#house_facilities_3_format').val()

        let houseFacilities3Note = $('#house_facilities_3_note').val()

        if ($("#without-24").is(":checked")) {
            houseFacilities3Format = "",
                houseFacilities3Note = ""
        }

        let liftWithoutWith = $('input:radio[name="lift_without_with"]:checked').val()

        let liftRentState = $('#lift_rent_state').val()

        let liftNote = $('#lift_note').val()

        if ($("#without-25").is(":checked")) {
            liftRentState = "",
                liftNote = ""
        }

        let electronicLockWithoutWith = $('input:radio[name="electronic_lock_without_with"]:checked').val()

        let electronicLockRentState = $('#electronic_lock_rent_state').val()

        let electronicLockNote = $('#electronic_lock_note').val()

        if ($("#without-26").is(":checked")) {
            electronicLockRentState = "",
                electronicLockNote = ""
        }

        let mailboxWithoutWith = $('input:radio[name="mailbox_without_with"]:checked').val()

        let mailboxRentState = $('#mailbox_rent_state').val()

        let mailboxNote = $('#mailbox_note').val()

        if ($("#without-27").is(":checked")) {
            mailboxRentState = "",
                mailboxNote = ""
        }

        let deliveryBoxWithoutWith = $('input:radio[name="delivery_box_without_with"]:checked').val()

        let deliveryBoxRentState = $('#delivery_box_rent_state').val()

        let deliveryBoxNote = $('#delivery_box_note').val()

        if ($("#without-28").is(":checked")) {
            deliveryBoxRentState = "",
                deliveryBoxNote = ""
        }

        let trunkRoomWithoutWith = $('input:radio[name="trunk_room_without_with"]:checked').val()

        let trunkRoomHaveOrHavent = $('input:radio[name="trunk_room_have_or_havent"]:checked').val()
        if (trunkRoomHaveOrHavent === "可") {
            trunkRoomHaveOrHavent = $('#trunk_room_money').val()
        } else {
            trunkRoomHaveOrHavent = ""
        }

        let trunkRoomNote = $('#trunk_room_note').val()

        if ($("#without-29").is(":checked")) {
            trunkRoomHaveOrHavent = "",
                trunkRoomNote = ""
        }

        let parkingGarageWithoutWith = $('input:radio[name="parking_garage_without_with"]:checked').val()

        let parkingGarageHaveOrHavent = $('input:radio[name="parking_garage_have_or_havent"]:checked').val()
        if (parkingGarageHaveOrHavent === "可") {
            parkingGarageHaveOrHavent = $('#parking_garage_money').val()
        } else {
            parkingGarageHaveOrHavent = ""
        }

        let parkingGarageNote = $('#parking_garage_note').val()

        if ($("#without-30").is(":checked")) {
            parkingGarageHaveOrHavent = "",
                parkingGarageNote = ""
        }

        let bicycleParkingWithoutWith = $('input:radio[name="bicycle_parking_without_with"]:checked').val()

        let bicycleParkingHaveOrHavent = $('input:radio[name="bicycle_parking_have_or_havent"]:checked').val()
        if (bicycleParkingHaveOrHavent === "可") {
            bicycleParkingHaveOrHavent = $('#bicycle_parking_money').val()
        } else {
            bicycleParkingHaveOrHavent = ""
        }

        let bicycleParkingNote = $('#bicycle_parking_note').val()

        if ($("#without-31").is(":checked")) {
            bicycleParkingHaveOrHavent = "",
                bicycleParkingNote = ""
        }

        let scooterParkingWithoutWith = $('input:radio[name="scooter_parking_without_with"]:checked').val()

        let scooterParkingHaveOrHavent = $('input:radio[name="scooter_parking_have_or_havent"]:checked').val()
        if (scooterParkingHaveOrHavent === "可") {
            scooterParkingHaveOrHavent = $('#scooter_parking_money').val()
        } else {
            scooterParkingHaveOrHavent = ""
        }

        let scooterParkingNote = $('#scooter_parking_note').val()

        if ($("#without-32").is(":checked")) {
            scooterParkingHaveOrHavent = "",
                scooterParkingNote = ""
        }

        let publicFacilities1 = $('#public_facilities_1').val()

        let publicFacilities1WithoutWith = $('input:radio[name="public_facilities_1_without_with"]:checked').val()

        let publicFacilities1RentState = $('#public_facilities_1_rent_state').val()

        let publicFacilities1Note = $('#public_facilities_1_note').val()

        if ($("#without-33").is(":checked")) {
            publicFacilities1RentState = "",
                publicFacilities1Note = ""
        }

        let publicFacilities2 = $('#public_facilities_2').val()

        let publicFacilities2WithoutWith = $('input:radio[name="public_facilities_2_without_with"]:checked').val()

        let publicFacilities2RentState = $('#public_facilities_2_rent_state').val()

        let publicFacilities2Note = $('#public_facilities_2_note').val()

        if ($("#without-34").is(":checked")) {
            publicFacilities2RentState = "",
                publicFacilities2Note = ""
        }

        let publicFacilitiesNote = $('#public_facilities_note').val()

        let contractStartTime = $('#contract_start_time').val()
        let contractEndTime = $('#contract_end_time').val()
        let contractTime = $('#contract_time').val()
        let deliveryDateOfContractTimeObject = $('#delivery_date_of_contract_time_object').val()

        let monthly = $('#monthly').val()

        let rentPaymentDeadlineMonth = $('#rent_payment_deadline_month').val()

        let rentPaymentDeadlineDate = $('#rent_payment_deadline_date').val()

        let administrationFee = $('#administration_fee').val()

        let administrationFeeMonth = $('#administration_fee_month').val()

        let administrationFeeDate = $('#administration_fee_date').val()

        let securityDepositMonth = $('#security_deposit_month').val()

        let securityDepositDate = $('#security_deposit_date').val()

        let parkingFee = $('#parking_fee').val()

        let parkingFeeNote = $('#parking_fee_note').val()

        let ancillaryFacilityFee = $('#ancillary_facility_fee').val()

        let ancillaryFacilityFeeNote = $('#ancillary_facility_fee_note').val()

        let cashGift = $('#cash_gift').val()

        let cashGiftNote = $('#cash_gift_note').val()

        let monthlyPaymentMethod = $('#monthly_payment_method').val()

        if ($("#monthly_payment_method_other").is(":checked")) {
            monthlyPaymentMethodOther = $("#monthly_payment_method_other_text").val()
        } else {
            monthlyPaymentMethodOther = ""
        }

        if ($("#monthly_payment_method_other").is(":checked")) {
            monthlyPaymentMethod = ""
        }

        let beneficiaryBankAndBranchName = $('#beneficiary_bank_and_branch_name').val()

        let accountType = $('#account_type').val()

        let accountNumber = $('#account_number').val()

        let accountHolder = $('#account_holder').val()

        let transferFeeBearer = $('#transfer_fee_bearer').val()

        let bearerAddress = $('#bearer_address').val()

        let keysLendAndNumber1 = $('#keys_lend_and_number_1').val()

        let keysLendAndNumber2 = $('#keys_lend_and_number_2').val()

        let keysLendAndNumber3 = $('#keys_lend_and_number_3').val()

        let landlordName = $('#landlord_name').val()

        let landlordPhone = $('#landlord_phone').val()

        let landlordAddress = $('#landlord_address').val()

        let realEstateAgencyName = $('#real_estate_agency_name').val()

        let realEstateAgencyPhone = $('#real_estate_agency_phone').val()

        let realEstateAgencyAddress = $('#real_estate_agency_address').val()

        let registrationSystem = $('#registration_system').val()

        let registrationNumber = $('#registration_number').val()

        let administrantName = $('#administrant_name').val()

        let houseOwnerAddress = $('#house_owner_address').val()

        let houseOwnerName = $('#house_owner_name').val()

        let tenantName = $('#tenant_name').val()

        let tenantAge = $('#tenant_age').val()

        let residentName1 = $('#resident_name_1').val()

        let residentAge1 = $('#resident_age_1').val()

        let residentName2 = $('#resident_name_2').val()

        let residentAge2 = $('#resident_age_2').val()

        let residentName3 = $('#resident_name_3').val()

        let residentAge3 = $('#resident_age_3').val()

        let residentName4 = $('#resident_name_4').val()

        let residentAge4 = $('#resident_age_4').val()

        let residentName5 = $('#resident_name_5').val()

        let residentAge5 = $('#resident_age_5').val()

        let residentName6 = $('#resident_name_6').val()

        let residentAge6 = $('#resident_age_6').val()

        let emergencyContactName = $('#emergency_contact_name').val()

        let emergencyContactRelationshipWithBorrowers = $('#emergency_contact_relationship_with_borrowers').val()

        let emergencyContactAddress = $('#emergency_contact_address').val()

        let emergencyContactAddressPhone = $('#emergency_contact_address_phone').val()

        let emergencyContactWorkplace = $('#emergency_contact_workplace').val()

        let emergencyContactWorkplaceWorkPhone = $('#emergency_contact_workplace_work_phone').val()

        let emergencyContactMobileNumber = $('#emergency_contact_mobile_number').val()

        let maximumAmount = $('#maximum_amount').val()

        let renewalAmountMonthWithoutWith = $('input:radio[name="renewal_amount_without_with"]:checked').val()

        let renewalAmountMonth = $('input:radio[name="renewal_amount_month"]:checked').val()

        if ($("#renewal_amount_month_checkbox").is(":checked")) {
            renewalAmountMonth = $("#renewal_amount_month").val()
        } else {
            renewalAmountMonth = ""
        }


        if ($("#renewal_amount_date_checkbox").is(":checked")) {
            renewalAmountDate = $("#renewal_amount_date").val()
        } else {
            renewalAmountDate = ""
        }

        let renewalAmountWithoutNote = $('#renewal_amount_without_note').val()


        if ($("#without-35").is(":checked")) {
            renewalAmountMonth = "",
                renewalAmountDate = "",
                renewalAmountWithoutNote = ""
        }

        let specialTerms = $('#special_terms').val()

        let jointGuaranteeContractDate = $('#joint_guarantee_contract_date').val()

        let landlordAddress2 = $('#landlord_address_2').val()

        let landlordName2 = $('#landlord_name_2').val()

        let landlordPhone2 = $('#landlord_phone_2').val()

        let tenantAddress = $('#tenant_address').val()

        let tenantName2 = $('#tenant_name_2').val()

        let tenantPhone = $('#tenant_phone').val()

        let jointGuarantorAddress = $('#joint_guarantor_address').val()

        let jointGuarantorName = $('#joint_guarantor_name').val()

        let jointGuarantorPhone = $('#joint_guarantor_phone').val()

        let maximumAmount2 = $('#maximum_amount_2').val()


        addHomeContract(houseName,
            houseStairs,
            houseRoom,
            houseAddress,
            houseRegistry,
            houseTypes,
            houseStructure,
            houseHouseholds,
            houseCompletionReignTitle,
            houseCompletionTime,
            houseConstructionReignTitle,
            houseConstructionTime,
            houseRoomNumber,
            houseRoomLayout,
            houseFloorSpace,
            houseBalconyArea,
            electricityWithoutWith,
            electricityFormatAmpere,
            electricityFormatMeter1,
            electricityFormatMeter2,
            electricityFormatMeter3,
            electricityNote,
            gasWithoutWith,
            gasFormat1,
            gasFormat2,
            gasFormatMeter1,
            gasFormatMeter2,
            gasFormatMeter3,
            gasNote,
            stoveWithoutWith,
            stoveFormat1,
            stoveFormat2,
            stoveFormat3,
            stoveNote,
            aqueductWithoutWith,
            aqueductFormat1,
            aqueductFormat2,
            aqueductFormat3,
            aqueductNote,
            sewerageWithoutWith,
            sewerageFormat1,
            sewerageFormat2,
            sewerageNote,
            counterWithoutWith,
            counterFormat1,
            counterFormat2,
            counterFormat3,
            counterFormat4,
            counterNote,
            toiletWithoutWith,
            toiletFormat1,
            toiletFormat2,
            toiletFormat3,
            toiletFormat4,
            toiletFormat5,
            toiletNote,
            bathroomWithoutWith,
            bathroomFormatShowerWithoutWith,
            bathroomFormatOther,
            bathroomNote,
            sinkWithoutWith,
            sinkFormat1,
            sinkFormat2,
            sinkFormat3,
            sinkFormat4Other,
            sinkNote,
            washingMachinePlaceWithoutWith,
            washingMachinePlaceFormat,
            washingMachinePanWithoutWith,
            washingMachinePlaceNote,
            waterHeaterWithoutWith,
            waterHeater,
            waterHeaterFormat1,
            waterHeaterFormat2,
            waterHeaterFormat3,
            waterHeaterFormat4,
            waterHeaterFormat5Other,
            waterHeaterNote,
            airConditionerWithoutWith,
            airConditioner,
            airConditionerPlumbingSleeveWithoutWith,
            airConditionerFormat1,
            airConditionerFormat2Other,
            airConditioningEquipmentNote,
            lightWithoutWith,
            lightFormat,
            lightNote,
            furnitureWithoutWith,
            furnitureFormat1,
            furnitureFormat2,
            furnitureFormat3,
            furnitureFormat4Other,
            furnitureNote,
            tvWithoutWith,
            tvFormat,
            tvNote,
            catvWithoutWith,
            catvFormat,
            catvNote,
            internetWithoutWith,
            internetFormat,
            internetNote,
            storehouseWithoutWith,
            storehouseFormat,
            storehouseNote,
            patioWithoutWith,
            patioFormat,
            patioNote,
            roofBalconyWithoutWith,
            roofBalconyFormat,
            roofBalconyNote,
            keyWithoutWith,
            keyNumber,
            moreKey,
            keyNote,
            houseFacilities1,
            houseFacilities1WithoutWith,
            houseFacilities1Format,
            houseFacilities1Note,
            houseFacilities2,
            houseFacilities2WithoutWith,
            houseFacilities2Format,
            houseFacilities2Note,
            houseFacilities3,
            houseFacilities3WithoutWith,
            houseFacilities3Format,
            houseFacilities3Note,
            liftWithoutWith,
            liftRentState,
            liftNote,
            electronicLockWithoutWith,
            electronicLockRentState,
            electronicLockNote,
            mailboxWithoutWith,
            mailboxRentState,
            mailboxNote,
            deliveryBoxWithoutWith,
            deliveryBoxRentState,
            deliveryBoxNote,
            trunkRoomWithoutWith,
            trunkRoomHaveOrHavent,
            trunkRoomNote,
            parkingGarageWithoutWith,
            parkingGarageHaveOrHavent,
            parkingGarageNote,
            bicycleParkingWithoutWith,
            bicycleParkingHaveOrHavent,
            bicycleParkingNote,
            scooterParkingWithoutWith,
            scooterParkingHaveOrHavent,
            scooterParkingNote,
            publicFacilities1,
            publicFacilities1WithoutWith,
            publicFacilities1RentState,
            publicFacilities1Note,
            publicFacilities2,
            publicFacilities2WithoutWith,
            publicFacilities2RentState,
            publicFacilities2Note,
            publicFacilitiesNote,
            contractStartTime,
            contractEndTime,
            contractTime,
            deliveryDateOfContractTimeObject,
            monthly,
            rentPaymentDeadlineMonth,
            rentPaymentDeadlineDate,
            administrationFee,
            administrationFeeMonth,
            administrationFeeDate,
            securityDepositMonth,
            securityDepositDate,
            parkingFee,
            parkingFeeNote,
            ancillaryFacilityFee,
            ancillaryFacilityFeeNote,
            cashGift,
            cashGiftNote,
            monthlyPaymentMethod,
            monthlyPaymentMethodOther,
            beneficiaryBankAndBranchName,
            accountType,
            accountNumber,
            accountHolder,
            transferFeeBearer,
            bearerAddress,
            keysLendAndNumber1,
            keysLendAndNumber2,
            keysLendAndNumber3,
            landlordName,
            landlordPhone,
            landlordAddress,
            realEstateAgencyName,
            realEstateAgencyPhone,
            realEstateAgencyAddress,
            registrationSystem,
            registrationNumber,
            administrantName,
            houseOwnerAddress,
            houseOwnerName,
            tenantName,
            tenantAge,
            residentName1,
            residentAge1,
            residentName2,
            residentAge2,
            residentName3,
            residentAge3,
            residentName4,
            residentAge4,
            residentName5,
            residentAge5,
            residentName6,
            residentAge6,
            emergencyContactName,
            emergencyContactRelationshipWithBorrowers,
            emergencyContactAddress,
            emergencyContactAddressPhone,
            emergencyContactWorkplace,
            emergencyContactWorkplaceWorkPhone,
            emergencyContactMobileNumber,
            maximumAmount,
            renewalAmountMonthWithoutWith,
            renewalAmountMonth,
            renewalAmountDate,
            renewalAmountWithoutNote,
            specialTerms,
            jointGuaranteeContractDate,
            landlordAddress2,
            landlordName2,
            landlordPhone2,
            tenantAddress,
            tenantName2,
            tenantPhone,
            jointGuarantorAddress,
            jointGuarantorName,
            jointGuarantorPhone,
            maximumAmount2)


        console.log(
            houseName,
            houseStairs,
            houseRoom,
            houseAddress,
            houseRegistry,
            houseTypes,
            houseStructure,
            houseHouseholds,
            houseCompletionReignTitle,
            houseCompletionTime,
            houseConstructionReignTitle,
            houseConstructionTime,
            houseRoomNumber,
            houseRoomLayout,
            houseFloorSpace,
            houseBalconyArea,
            electricityWithoutWith,
            electricityFormatAmpere,
            electricityFormatMeter1,
            electricityFormatMeter2,
            electricityFormatMeter3,
            electricityNote,
            gasWithoutWith,
            gasFormat1,
            gasFormat2,
            gasFormatMeter1,
            gasFormatMeter2,
            gasFormatMeter3,
            gasNote,
            stoveWithoutWith,
            stoveFormat1,
            stoveFormat2,
            stoveFormat3,
            stoveNote,
            aqueductWithoutWith,
            aqueductFormat1,
            aqueductFormat2,
            aqueductFormat3,
            aqueductNote,
            sewerageWithoutWith,
            sewerageFormat1,
            sewerageFormat2,
            sewerageNote,
            counterWithoutWith,
            counterFormat1,
            counterFormat2,
            counterFormat3,
            counterFormat4,
            counterNote,
            toiletWithoutWith,
            toiletFormat1,
            toiletFormat2,
            toiletFormat3,
            toiletFormat4,
            toiletFormat5,
            toiletNote,
            bathroomWithoutWith,
            bathroomFormatShowerWithoutWith,
            bathroomFormatOther,
            bathroomNote,
            sinkWithoutWith,
            sinkFormat1,
            sinkFormat2,
            sinkFormat3,
            sinkFormat4Other,
            sinkNote,
            washingMachinePlaceWithoutWith,
            washingMachinePlaceFormat,
            washingMachinePanWithoutWith,
            washingMachinePlaceNote,
            waterHeaterWithoutWith,
            waterHeater,
            waterHeaterFormat1,
            waterHeaterFormat2,
            waterHeaterFormat3,
            waterHeaterFormat4,
            waterHeaterFormat5Other,
            waterHeaterNote,
            airConditionerWithoutWith,
            airConditioner,
            airConditionerPlumbingSleeveWithoutWith,
            airConditionerFormat1,
            airConditionerFormat2Other,
            airConditioningEquipmentNote,
            lightWithoutWith,
            lightFormat,
            lightNote,
            furnitureWithoutWith,
            furnitureFormat1,
            furnitureFormat2,
            furnitureFormat3,
            furnitureFormat4Other,
            furnitureNote,
            tvWithoutWith,
            tvFormat,
            tvNote,
            catvWithoutWith,
            catvFormat,
            catvNote,
            internetWithoutWith,
            internetFormat,
            internetNote,
            storehouseWithoutWith,
            storehouseFormat,
            storehouseNote,
            patioWithoutWith,
            patioFormat,
            patioNote,
            roofBalconyWithoutWith,
            roofBalconyFormat,
            roofBalconyNote,
            keyWithoutWith,
            keyNumber,
            moreKey,
            keyNote,
            houseFacilities1,
            houseFacilities1WithoutWith,
            houseFacilities1Format,
            houseFacilities1Note,
            houseFacilities2,
            houseFacilities2WithoutWith,
            houseFacilities2Format,
            houseFacilities2Note,
            houseFacilities3,
            houseFacilities3WithoutWith,
            houseFacilities3Format,
            houseFacilities3Note,
            liftWithoutWith,
            liftRentState,
            liftNote,
            electronicLockWithoutWith,
            electronicLockRentState,
            electronicLockNote,
            mailboxWithoutWith,
            mailboxRentState,
            mailboxNote,
            deliveryBoxWithoutWith,
            deliveryBoxRentState,
            deliveryBoxNote,
            trunkRoomWithoutWith,
            trunkRoomHaveOrHavent,
            trunkRoomNote,
            parkingGarageWithoutWith,
            parkingGarageHaveOrHavent,
            parkingGarageNote,
            bicycleParkingWithoutWith,
            bicycleParkingHaveOrHavent,
            bicycleParkingNote,
            scooterParkingWithoutWith,
            scooterParkingHaveOrHavent,
            scooterParkingNote,
            publicFacilities1,
            publicFacilities1WithoutWith,
            publicFacilities1RentState,
            publicFacilities1Note,
            publicFacilities2,
            publicFacilities2WithoutWith,
            publicFacilities2RentState,
            publicFacilities2Note,
            publicFacilitiesNote,
            contractStartTime,
            contractEndTime,
            contractTime,
            deliveryDateOfContractTimeObject,
            monthly,
            rentPaymentDeadlineMonth,
            rentPaymentDeadlineDate,
            administrationFee,
            administrationFeeMonth,
            administrationFeeDate,
            securityDepositMonth,
            securityDepositDate,
            parkingFee,
            parkingFeeNote,
            ancillaryFacilityFee,
            ancillaryFacilityFeeNote,
            cashGift,
            cashGiftNote,
            monthlyPaymentMethod,
            monthlyPaymentMethodOther,
            beneficiaryBankAndBranchName,
            accountType,
            accountNumber,
            accountHolder,
            transferFeeBearer,
            bearerAddress,
            keysLendAndNumber1,
            keysLendAndNumber2,
            keysLendAndNumber3,
            landlordName,
            landlordPhone,
            landlordAddress,
            realEstateAgencyName,
            realEstateAgencyPhone,
            realEstateAgencyAddress,
            registrationSystem,
            registrationNumber,
            administrantName,
            houseOwnerAddress,
            houseOwnerName,
            tenantName,
            tenantAge,
            residentName1,
            residentAge1,
            residentName2,
            residentAge2,
            residentName3,
            residentAge3,
            residentName4,
            residentAge4,
            residentName5,
            residentAge5,
            residentName6,
            residentAge6,
            emergencyContactName,
            emergencyContactRelationshipWithBorrowers,
            emergencyContactAddress,
            emergencyContactAddressPhone,
            emergencyContactWorkplace,
            emergencyContactWorkplaceWorkPhone,
            emergencyContactMobileNumber,
            maximumAmount,
            renewalAmountMonthWithoutWith,
            renewalAmountMonth,
            renewalAmountDate,
            renewalAmountWithoutNote,
            specialTerms,
            jointGuaranteeContractDate,
            landlordAddress2,
            landlordName2,
            landlordPhone2,
            tenantAddress,
            tenantName2,
            tenantPhone,
            jointGuarantorAddress,
            jointGuarantorName,
            jointGuarantorPhone,
            maximumAmount2
        )


    })


    $('#btn2').click(function (e) {
        let houseName = $('#house_name').val()

        let houseRoom = $('#house_room').val()

        let houseAddress = $('#house_address').val()

        let contractStartTime = $('#contract_start_time').val()

        let contractEndTime = $('#contract_end_time').val()
        let contractTime = $('#contract_time').val()
        let deliveryDateOfContractTimeObject = $('#delivery_date_of_contract_time_object').val()

        let monthly = $('#monthly').val()

        let rentPaymentDeadlineMonth = $('#rent_payment_deadline_month').val()

        let rentPaymentDeadlineDate = $('#rent_payment_deadline_date').val()

        let administrationFee = $('#administration_fee').val()

        let administrationFeeMonth = $('#administration_fee_month').val()

        let administrationFeeDate = $('#administration_fee_date').val()

        let securityDepositMonth = $('#security_deposit_month').val()

        let securityDepositDate = $('#security_deposit_date').val()

        let parkingFee = $('#parking_fee').val()

        let parkingFeeNote = $('#parking_fee_note').val()

        let ancillaryFacilityFee = $('#ancillary_facility_fee').val()

        let ancillaryFacilityFeeNote = $('#ancillary_facility_fee_note').val()

        let cashGift = $('#cash_gift').val()

        let cashGiftNote = $('#cash_gift_note').val()

        let monthlyPaymentMethod = $('#monthly_payment_method').val()

        if ($("#monthly_payment_method_other").is(":checked")) {
            monthlyPaymentMethodOther = $("#monthly_payment_method_other_text").val()
        } else {
            monthlyPaymentMethodOther = ""
        }

        if ($("#monthly_payment_method_other").is(":checked")) {
            monthlyPaymentMethod = ""
        }

        let beneficiaryBankAndBranchName = $('#beneficiary_bank_and_branch_name').val()

        let accountType = $('#account_type').val()

        let accountNumber = $('#account_number').val()

        let accountHolder = $('#account_holder').val()

        let transferFeeBearer = $('#transfer_fee_bearer').val()

        let bearerAddress = $('#bearer_address').val()

        let keysLendAndNumber1 = $('#keys_lend_and_number_1').val()

        let keysLendAndNumber2 = $('#keys_lend_and_number_2').val()

        let keysLendAndNumber3 = $('#keys_lend_and_number_3').val()
        let tenantName = $('#tenant_name').val()

        let tenantAge = $('#tenant_age').val()

        let residentName1 = $('#resident_name_1').val()

        let residentAge1 = $('#resident_age_1').val()

        let residentName2 = $('#resident_name_2').val()

        let residentAge2 = $('#resident_age_2').val()

        let residentName3 = $('#resident_name_3').val()

        let residentAge3 = $('#resident_age_3').val()

        let residentName4 = $('#resident_name_4').val()

        let residentAge4 = $('#resident_age_4').val()

        let residentName5 = $('#resident_name_5').val()

        let residentAge5 = $('#resident_age_5').val()

        let residentName6 = $('#resident_name_6').val()

        let residentAge6 = $('#resident_age_6').val()

        let emergencyContactName = $('#emergency_contact_name').val()

        let emergencyContactRelationshipWithBorrowers = $('#emergency_contact_relationship_with_borrowers').val()

        let emergencyContactAddress = $('#emergency_contact_address').val()

        let emergencyContactAddressPhone = $('#emergency_contact_address_phone').val()

        let emergencyContactWorkplace = $('#emergency_contact_workplace').val()

        let emergencyContactWorkplaceWorkPhone = $('#emergency_contact_workplace_work_phone').val()

        let emergencyContactMobileNumber = $('#emergency_contact_mobile_number').val()

        let jointGuaranteeContractDate = $('#joint_guarantee_contract_date').val()

        let landlordAddress2 = $('#landlord_address_2').val()

        let landlordName2 = $('#landlord_name_2').val()

        let landlordPhone2 = $('#landlord_phone_2').val()

        let tenantAddress = $('#tenant_address').val()

        let tenantName2 = $('#tenant_name_2').val()

        let tenantPhone = $('#tenant_phone').val()

        let jointGuarantorAddress = $('#joint_guarantor_address').val()

        let jointGuarantorName = $('#joint_guarantor_name').val()

        let jointGuarantorPhone = $('#joint_guarantor_phone').val()

        let maximumAmount2 = $('#maximum_amount_2').val()

        updateContract(
            houseName,
            houseRoom,
            houseAddress,
            contractStartTime,
            contractEndTime,
            contractTime,
            deliveryDateOfContractTimeObject,
            monthly,
            rentPaymentDeadlineMonth,
            rentPaymentDeadlineDate,
            administrationFee,
            administrationFeeMonth,
            administrationFeeDate,
            securityDepositMonth,
            securityDepositDate,
            parkingFee,
            parkingFeeNote,
            ancillaryFacilityFee,
            ancillaryFacilityFeeNote,
            cashGift,
            cashGiftNote,
            monthlyPaymentMethod,
            monthlyPaymentMethodOther,
            beneficiaryBankAndBranchName,
            accountType,
            accountNumber,
            accountHolder,
            transferFeeBearer,
            bearerAddress,
            keysLendAndNumber1,
            keysLendAndNumber2,
            keysLendAndNumber3,
            tenantName,
            tenantAge,
            residentName1,
            residentAge1,
            residentName2,
            residentAge2,
            residentName3,
            residentAge3,
            residentName4,
            residentAge4,
            residentName5,
            residentAge5,
            residentName6,
            residentAge6,
            emergencyContactName,
            emergencyContactRelationshipWithBorrowers,
            emergencyContactAddress,
            emergencyContactAddressPhone,
            emergencyContactWorkplace,
            emergencyContactWorkplaceWorkPhone,
            emergencyContactMobileNumber,
            jointGuaranteeContractDate,
            landlordAddress2,
            landlordName2,
            landlordPhone2,
            tenantAddress,
            tenantName2,
            tenantPhone,
            jointGuarantorAddress,
            jointGuarantorName,
            jointGuarantorPhone,
            maximumAmount2
        )

        console.log(
            houseName,
            houseRoom,
            houseAddress,
            contractStartTime,
            contractEndTime,
            contractTime,
            deliveryDateOfContractTimeObject,
            monthly,
            rentPaymentDeadlineMonth,
            rentPaymentDeadlineDate,
            administrationFee,
            administrationFeeMonth,
            administrationFeeDate,
            securityDepositMonth,
            securityDepositDate,
            parkingFee,
            parkingFeeNote,
            ancillaryFacilityFee,
            ancillaryFacilityFeeNote,
            cashGift,
            cashGiftNote,
            monthlyPaymentMethod,
            monthlyPaymentMethodOther,
            beneficiaryBankAndBranchName,
            accountType,
            accountNumber,
            accountHolder,
            transferFeeBearer,
            bearerAddress,
            keysLendAndNumber1,
            keysLendAndNumber2,
            keysLendAndNumber3,
            tenantName,
            tenantAge,
            residentName1,
            residentAge1,
            residentName2,
            residentAge2,
            residentName3,
            residentAge3,
            residentName4,
            residentAge4,
            residentName5,
            residentAge5,
            residentName6,
            residentAge6,
            emergencyContactName,
            emergencyContactRelationshipWithBorrowers,
            emergencyContactAddress,
            emergencyContactAddressPhone,
            emergencyContactWorkplace,
            emergencyContactWorkplaceWorkPhone,
            emergencyContactMobileNumber,
            jointGuaranteeContractDate,
            landlordAddress2,
            landlordName2,
            landlordPhone2,
            tenantAddress,
            tenantName2,
            tenantPhone,
            jointGuarantorAddress,
            jointGuarantorName,
            jointGuarantorPhone,
            maximumAmount2
        )
    })




})