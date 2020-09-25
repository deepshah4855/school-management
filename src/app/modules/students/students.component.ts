import { StudentService } from './../../services/student.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  // student: any ={
  //   "studentId":"1001",
  //   "enrollmentNo":"68102",
  //   "name":"Rebecca",
  //   "lastName":"Smith",
  //   "grade":"1",
  //   "avgScore": 3.5,
  //   "major": "Maths",
  //   "gender":"Female",
  //   "image": "lady-1",
  //   "assignments":[
  //     {
  //       "assignmentId":"asgn1",
  //       "assignmentName":"Basics of Trigonometry",
  //       "assignmentWeightage":"7",
  //       "assignmentStartDt":"06/01/2020",
  //       "assignmentEndDt":"06/25/2020",
  //       "completionDt":"06/19/2020",
  //       "lessonName":"Trigonometry",
  //       "score": '3.4',
  //       "className": "Maths",
  //       "attempts": 1
  //     },
  //     {
  //       "assignmentId":"asgn2",
  //       "assignmentName":"Algebra",
  //       "assignmentWeightage":"7",
  //       "assignmentStartDt":"06/04/2020",
  //       "assignmentEndDt":"06/15/2020",
  //       "completionDt":"06/14/2020",
  //       "lessonName":"Mathematics",
  //       "score": '3.4',
  //       "className": "Maths",
  //       "attempts": 3
  //     },
  //     {
  //       "assignmentId":"asgn1",
  //       "assignmentName":"Chemistry - Liquid Solutions",
  //       "assignmentWeightage":"7",
  //       "assignmentStartDt":"06/01/2020",
  //       "assignmentEndDt":"06/25/2020",
  //       "completionDt":"06/19/2020",
  //       "lessonName":"Chemistry ",
  //       "score": '2.9',
  //       "className": "Chemistry",
  //       "attempts": 2
  //     },
  //     {
  //       "assignmentId":"asgn2",
  //       "assignmentName":"Algebra",
  //       "assignmentWeightage":"7",
  //       "assignmentStartDt":"06/04/2020",
  //       "assignmentEndDt":"06/15/2020",
  //       "completionDt":"06/14/2020",
  //       "lessonName":"Mathematics",
  //       "score": '3.4',
  //       "className": "Maths",
  //       "attempts": 3
  //     },
  //     {
  //       "assignmentId":"asgn1",
  //       "assignmentName":"Basics of Trigonometry",
  //       "assignmentWeightage":"7",
  //       "assignmentStartDt":"06/01/2020",
  //       "assignmentEndDt":"06/25/2020",
  //       "completionDt":"06/19/2020",
  //       "lessonName":"Trigonometry",
  //       "score": '4',
  //       "className": "Maths",
  //       "attempts": 1
  //     },
  //     {
  //       "assignmentId":"asgn2",
  //       "assignmentName":"Algebra",
  //       "assignmentWeightage":"7",
  //       "assignmentStartDt":"06/04/2020",
  //       "assignmentEndDt":"06/15/2020",
  //       "completionDt":"06/14/2020",
  //       "lessonName":"Mathematics",
  //       "score": '3.8',
  //       "className": "Maths",
  //       "attempts": 2
  //     }
  //   ]
  // }

  student:any;

  constructor(private route: ActivatedRoute, private studentService: StudentService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.student = this.studentService.getStudent(id);
    })
  }



}
