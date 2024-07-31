import { Injectable, signal } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({ providedIn: 'root' })
export class SwallService {
  isLoading = signal<boolean>(false);

  public showLoading() {
    Swal.fire({
      title: 'Cargando',
      html: 'Por favor espera...',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  }

  public hideLoading() {
    Swal.close();
  }

  public showMessage(
    title: string,
    html: string,
    type: 'info' | 'warning' | 'success' | 'error' | 'question'
  ) {
    Swal.fire({
      title: title,
      html: html,
      icon: type,
      allowOutsideClick: false,
    });
  }

  public showConfirm(
    title: string,
    text: string,
    confirmButtonText: string,
    cancelButtonText: string
  ) {
    return Swal.fire({
      title: title,
      text: text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: confirmButtonText,
      cancelButtonText: cancelButtonText,
    });
  }

  public confirmDelete() {
    return Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminarlo!',
      cancelButtonText: 'No, cancelar!',
    });
  }

  public confirmUpdate() {
    return Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, actualizarlo!',
      cancelButtonText: 'No, cancelar!',
    });
  }
}
