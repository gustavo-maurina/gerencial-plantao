import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { apiUrl } from 'src/utils/apiUrl';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.configureSearchDebounce();
    this.fetchAll();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  displayedColumns: string[] = ['nome', 'email', 'criado_em'];
  searchSub = new Subject<string>();
  dataSource = new MatTableDataSource([]);

  filter(event: Event) {
    const filterTxt = (event.target as HTMLInputElement).value;
    this.searchSub.next(filterTxt);
  }

  configureSearchDebounce() {
    this.searchSub
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe((filterValue: string) => {
        if (filterValue.length < 2) return this.fetchAll();
        this.fetchWithText(filterValue);
      });
  }

  fetchWithText(text: string) {
    const params = { params: { search: text } };
    this.http.get(`${apiUrl}/usuario`, params).subscribe((res: any) => {
      this.setData(res);
    });
  }

  fetchAll() {
    this.http.get(`${apiUrl}/usuario`).subscribe((res: any) => {
      this.setData(res);
    });
  }

  dateFormatted(fullDate: string) {
    const date = new Date(fullDate);
    const day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
    const month = date.getMonth() > 9 ? date.getMonth() : '0' + date.getMonth();

    return `${day}/${month}/${date.getFullYear()}`;
  }

  setData(data: any) {
    const treatedData: any = data.map((item: any) => ({
      ...item,
      criado_em: this.dateFormatted(item.criado_em),
    }));

    this.dataSource.data = treatedData;
  }
}
