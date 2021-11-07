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
export class JobComponent implements OnInit, AfterViewInit {
  dtTrigger: Subject<any> = new Subject();
  
  Jobs : IJobDTO;
  displayedColumns: string[] = ['jobID', 'jobName', 'Actions'];
  dataSource: MatTableDataSource<IJobDTO>;
  selection = new SelectionModel<IJobDTO>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected ===
    numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }

  constructor(
    private JobService: JobService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.LoadJobs();
  }

  LoadJobs(){
    this.JobService.GetAllJob().subscribe((data: IJobDTO) => {
      this.Jobs = data;
      console.log(this.Jobs);
   });
  }

}
