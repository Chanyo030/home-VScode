function returnUpdateAll() {
    //先找到存在session地資料，透過key 返回JSON格式
    //對應「HomesFunction」 updateContract 的 ajax
    let residentialBuildingLeaseAgreement = sessionStorage.getItem('residentialBuildingLeaseAgreement')
    let contractHistory = sessionStorage.getItem('contractHistory')


    //JSON.parse():解析JSON格式，將前一頁儲存(JSON格式的entity)轉回原本entity的類型
    let returnResidentialBuildingLeaseAgreement = JSON.parse(residentialBuildingLeaseAgreement)
    let returnContractHistory = JSON.parse(contractHistory)

    console.log(returnResidentialBuildingLeaseAgreement)
    console.log(returnContractHistory)

    $('#house_name').attr("value", returnResidentialBuildingLeaseAgreement.houseName)
    $('#house_room').attr("value", returnResidentialBuildingLeaseAgreement.houseRoom)
    $('#house_address').attr("value", returnResidentialBuildingLeaseAgreement.houseAddress)
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
