import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { SwallService } from '../../../../shared/swall.service';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.scss'
})
export class AddPostComponent {
  private subscriptions = new Subscription();
  private readonly fb = inject(FormBuilder);
  private readonly _swall = inject(SwallService);
  private readonly _modules = inject(PostsService);
  public newModule: FormGroup;
  public formStatus:boolean= false;

  constructor(private dialogRef: MatDialogRef<AddPostComponent>) {
    this.newModule = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  public submit(){
    this.formStatus = true
    if (this.newModule.invalid) return

    this.subscriptions.add(
      this._modules.new(this.newModule.value).subscribe({
        next: (value: any) => {
          this.dialogRef.close(true);
          this._swall.showMessage('Success', 'Creado correctamente', 'success');
        },
        error: (err) => {
          this.dialogRef.close(false);
          this._swall.showMessage('Error', 'Error al crear', 'error');
          console.error('Error creating workspace', err);
        },
      })
    )
  }

  get f(): { [key: string]: AbstractControl } {
    return this.newModule.controls;
  }


}
