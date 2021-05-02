student_array=[];
function submit(){
    var n_1=document.getElementById("n_s_1").value;
    var n_2=document.getElementById("n_s_2").value;
    var n_3=document.getElementById("n_s_3").value;
    var n_4=document.getElementById("n_s_4").value;
    var n_5=document.getElementById("n_s_5").value;

    student_array.push(n_1);
    student_array.push(n_2);
    student_array.push(n_3);
    student_array.push(n_4);
    student_array.push(n_5);

    console.log(student_array)
    document.getElementById("d_n").innerHTML=student_array;
    document.getElementById("s_b").style.display="none";
    document.getElementById("sort_b").style.display="inline-block"
}

function sorting(){
    student_array.sort();
    console.log(student_array);
    document.getElementById("d_n").innerHTML=student_array;
}