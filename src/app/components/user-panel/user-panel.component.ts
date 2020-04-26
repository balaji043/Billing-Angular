import { Component, OnInit, ViewChild } from '@angular/core';
import { UserRole } from 'src/app/utils/billing-constants';
import { UserSearchRequest } from 'src/app/model/user-search-request';
import { UserService } from 'src/app/service/user.service';
import { GridConfig } from 'src/app/model/generic-grid.config';
import { User } from 'src/app/model/user.model';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { UserTableConfig } from 'src/app/config/generic-table-config/user-table-config';
import { GenericGridComponent } from 'src/app/core/mat-generic-grid/mat-generic-grid.component';
import { error } from 'util';
import { UserRegistrationComponent } from '../user-registration/user-registration.component';
@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  @ViewChild(GenericGridComponent, { static: true }) genericGrid: GenericGridComponent;

  public userGridConfig: GridConfig;
  public genericMatTabaleDataSource: MatTableDataSource<User>;
  public UserRole = UserRole;
  public userSearchRequest: UserSearchRequest;
  constructor(
    public dialog: MatDialog,
    private userService: UserService
  ) {
    this.userGridConfig = UserTableConfig();
    this.userSearchRequest = new UserSearchRequest();
    this.userSearchRequest.userRole = UserRole.BOTH;
    this.makeSearchUserCall();
  }

  ngOnInit() {
    this.genericMatTabaleDataSource = new MatTableDataSource();
    this.genericMatTabaleDataSource.paginator = this.genericGrid.paginator;
  }

  public openUserRegistrationDialog(): void {
    const dialogRef = this.dialog.open(UserRegistrationComponent, {
      width: '450px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.makeSearchUserCall();
      }
    });
  }


  public makeSearchUserCall(): void {
    this.userService.getAllUsers(this.userSearchRequest)
      .subscribe(
        response => {
          this.genericMatTabaleDataSource.data = response;
        },
        ex => {
          console.error(ex);
        }
      );
  }
}
