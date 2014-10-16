<script type="text/javascript">
        /*
          author: Joey
          Date :2014-10-15
          ----------------
          Group table rows
          tableId : table object
          columnNum :int  Group rows by this column number
          mergeRows:array  some rows needed to merge
        */
        function GroupTableCol(tableId, columnNum, mergeRows) {
            var table = $(tableId);
            var rows = table.find('tbody tr');
            var curentRow = [], nextRow = [], curentRowCell = '', nextRowCell = '';
            var i = 0, rowSpanNum = 1;
            while (i < rows.length - 1) {

                curentRow = rows[i];
                for (++i; i < rows.length; i++) {
                    nextRow = rows[i];
                    curentRowCell = curentRow.children[columnNum];
                    nextRowCell = nextRow.children[columnNum];
                    if (curentRowCell.innerText == nextRowCell.innerText) {

                        mergeRows.forEach(function (col) {
                            nextRow.deleteCell(col);
                        });

                        rowSpanNum++;
                    } else {
                        mergeRows.forEach(function (col) {
                            curentRow.children[col].rowSpan = rowSpanNum;
                        });

                        rowSpanNum = 1;
                        break;
                    }

                    if (i == rows.length - 1) {
                        curentRowCell.rowSpan = rowSpanNum;
                    }
                };
            };
        };

        window.onload = function () {
            GroupCol('#myTable', 0, [0, 1, 2, 4]);
        };
    </script>
