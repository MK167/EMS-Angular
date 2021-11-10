import { JobService } from './../../Services/Admin-Services/Job/job.service';
import { IJobDTO } from './../../Models/IJobDTO';
import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserData } from 'app/table-list/table-list.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AfterViewInit } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * @title Data table with sorting, pagination, and filtering.
 */


@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit{
  dtTrigger: Subject<any> = new Subject();
  
  Jobs : IJobDTO[] = [];
  displayedColumns: string[] = ['jobID', 'jobName', 'actions'];
  dataSource = new MatTableDataSource<IJobDTO>(this.Jobs);
  selection = new SelectionModel<IJobDTO>(true, []);


   @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  @ViewChild(MatSort, {static: true}) sort: MatSort;



  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  constructor(
    private JobService: JobService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.LoadJobs();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

  }

  LoadJobs(){
    this.JobService.GetAllJob().subscribe(data => {
      this.Jobs = data; 
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      console.log(this.Jobs);}
    );
  }

}
