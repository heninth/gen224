$(document).ready(function () {

    $('.datepicker').datepicker({
        i18n: {
            months: [
                'มกราคม',
                'กุมภาพันธ์',
                'มีนาคม',
                'เมษายน',
                'พฤษภาคม',
                'มิถุนายน',
                'กรกฏาคม',
                'สิงหาคม',
                'กันยายน',
                'ตุลาคม',
                'พฤศจิกายน',
                'ธันวาคม'
            ],
            monthsShort: [
                'ม.ค.',
                'ก.พ.',
                'มี.ค.',
                'เม.ย',
                'พ.ค.',
                'มิ.ย.',
                'ก.ค.',
                'ส.ค.',
                'ก.ย.',
                'ต.ค.',
                'พ.ย.',
                'ธ.ค.'
            ],
            weekdays:[
                'อาทิตย์',
                'จันทร์',
                'อังคาร',
                'พุธ',
                'พฤหัสบดี',
                'ศุกร์',
                'เสาร์'
            ],
            weekdaysShort: [
                'อา',
                'จ',
                'อ',
                'พ',
                'พฤ',
                'ศ',
                'ส'
            ],
            weekdaysAbbrev: [
                'อ',
                'จ',
                'อ',
                'พ',
                'พ',
                'ศ',
                'ส'
            ]
        },
        format: 'd mmmm yyyy',
        showClearBtn: true,
        showDaysInNextAndPreviousMonths: true,
        setDefaultDate: true
        
    });
    $('.timepicker').timepicker({
        defaultTime: 'now',
        twelveHour: false,
        showClearBtn: true        
    });
    $('select').formSelect();

});

