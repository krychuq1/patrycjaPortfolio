import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {SecretProjectsService} from '../../services/secret-projects.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {
  error = false;
  loading = false;
  @Output() secretEmitter = new EventEmitter<boolean>();

  constructor(private router: Router, private secretProject: SecretProjectsService) { }
  validatePw(password: string) {
    this.loading = true;
    this.error = false;
    this.secretProject.validatePassword(password).then(res => {
      this.loading = false;
      this.secretEmitter.emit(false);
      localStorage.setItem('token', res.token);
      this.router.navigate(['/secretProjects']);
    }, e => {
      this.loading = false;
      this.error = true;
    });
  }
  close() {
    this.secretEmitter.emit(false);
  }
  ngOnInit() {
  }

}
