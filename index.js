techTeam = [
    {id:'1',name: 'Madhavi Perumal'},
    {id:'2',name: 'Yash Mahadik'},
    {id:'3',name: 'Vaibhav Sanjay More'},
    {id:'4',name: 'Ojashvani Ghodeswar'},
    {id:'5',name: 'A V Vaishak'},
    {id:'6',name: 'Amogh Raut'},
    {id:'7',name: 'Chaplot Palak'},
    {id:'8',name: 'Omkar Khandalkar'},
    {id:'9',name: 'VAIBHAV DINKAR KORLEKAR'},
    {id:'10',name: 'Sneha Bombatkar'},
    {id:'11',name: 'Mirnalin Sahoo'},
    {id:'12',name: 'Riddhi Jain'},
    {id:'13',name: 'K.V. AJAY'},
    {id:'14',name: 'Vaishnavi Mahadik'},
    {id:'15',name: 'Riddhi Baheti'},
    {id:'16',name: 'Shraddha Sudhakar kadam'},
    {id:'17',name: 'Sanjana uday jadhav'},
    {id:'18',name: 'Samiksha Shinde'},
    {id:'19',name: 'Rohini Benke'},
    {id:'20',name: 'Jui Mandkulkar'},
    {id:'21',name: 'Sakshi Supekar'},
];

function findStudentName(studentID) {
    
    const student = techTeam.find((element) => element.id == studentID);
    return student.name;

}

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

$('#generateTask').click(function() {
    var weekNo = $('#weekNo').val();
    var weekTheme = $('#weekTheme').val();
    var student1 = $('#student1').val();
    var student2 = $('#student2').val();
    var student3 = $('#student3').val();
    var student4 = $('#student4').val();
    var student5 = $('#student5').val();
    var student6 = $('#student6').val();
    var student7 = $('#student7').val();
    var student8 = $('#student8').val();
    var deadline = $('#deadline').val();
    
    weekStudents = [
        findStudentName(student1),
        findStudentName(student2),
        findStudentName(student3),
        findStudentName(student4),
        findStudentName(student5),
        findStudentName(student6),
        findStudentName(student7),
        findStudentName(student8)
    ];
    weekNo = parseInt(weekNo);
    var factOrQuote = '';
    if (weekNo%2==0) {
        factOrQuote = 'Fact';
    }else{
        factOrQuote = 'Quote';
    }
    // Call function to create and display message
    createMessage(weekNo, weekTheme, weekStudents, factOrQuote, deadline);
});

function createMessage(weekNo, weekTheme, weekStudents, factOrQuote, deadline) {
    
    finalMessage = `
    🗒️ NOTE:
    Reply to this message with 👍 to give confirmation about completing the given task before the deadline whose names are mentioned below. Confirmation of all 8 people should be received tomorrow before 1 PM.

    ✔️Week ${weekNo} - Task
    👨🏻‍💻Tech Team IETE
    
    Quiz & Riddle Theme only - ( ${weekTheme} ) 
    (For other tasks any topic is allowed)
    1. ${weekStudents[0]} (Quiz x 1 Que)
    2. ${weekStudents[1]} (Quiz x 1 Que) 
    3. ${weekStudents[2]} (Quiz x 1 Que)
    4. ${weekStudents[3]} (Quiz x 1 Que)
    5. ${weekStudents[4]} (Techpost x1) 
    6. ${weekStudents[5]} (Internship x1)
    7. ${weekStudents[6]} (${factOrQuote} x1)
    8. ${weekStudents[7]} (Riddle x1)
    
    ☠️ Deadline: ${deadline} 
    
    📍Instructions: 
    1. Post above mentioned content in this Whatsapp group only in TEXT FORMAT or IMAGE FORMAT.
    2. Read Doc given in the Description of the group for detailed info.
    https://docs.google.com/document/d/13wnLba2tzq-xiGbizCY6cGijbOYhg-rWgjtPsS9SrDM/edit?usp=sharing
    3. If you'll not be able to do the above-given task please reply to this message. So that we can pass on your task to someone else.
    `;
    document.getElementById('generatedContent').value = finalMessage;
    
    $('#generatedContent').css('display','block');
    $('#copyContent').css('display','block');
    swal(
        'Content Generated Successfully',
        'Scroll Down and copy your content',
        'success'
    )
}

$('#generatedContent').css('display','none');
$('#copyContent').css('display','none');
$('#copyContent').click(function() {
    // Reference: https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
    var copyText = document.getElementById("generatedContent");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    swal({
        toast: true,
        icon: 'success',
        title: 'Content copied',
        showConfirmButton: false,
        timer: 1500
      })
});

$('#createDocPreview').click(function() {

    var weekNo = $('#weekNo').val();
    var weekTheme = $('#weekTheme').val();

    var quiz1 = $('#quiz1').val();
    var quiz2 = $('#quiz2').val();
    var quiz3 = $('#quiz3').val();
    var quiz4 = $('#quiz4').val();

    var techpostTitle = $('#techpostTitle').val();
    var techpostPhoto = $('#techpostPhoto').val();
    var techpostContent = $('#techpostContent').val();

    console.log(techpostPhoto);

});

function ExportToDoc(week){
    var HtmlHead = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
  
    var EndHtml = "</body></html>";
  
    //complete html
    var html = HtmlHead +document.getElementById("MainHTML").innerHTML+EndHtml;

    //specify the type
    var blob = new Blob(['\ufeff', html], {
        type: 'application/msword'
    });
    
    // Specify link url
    var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);
    
    // Specify file name
    filename = "Week "+week+" content"
    filename = filename?filename+'.doc':'document.doc';
    
    // Create download link element
    var downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);
    
    if(navigator.msSaveOrOpenBlob ){
        navigator.msSaveOrOpenBlob(blob, filename);
    }else{
        // Create a link to the file
        downloadLink.href = url;
        
        // Setting the file name
        downloadLink.download = filename;
        
        //triggering the function
        downloadLink.click();
    }
    
    document.body.removeChild(downloadLink);
}

