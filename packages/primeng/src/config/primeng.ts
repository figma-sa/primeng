import { ElementRef, inject, Injectable, PLATFORM_ID, signal, TemplateRef } from '@angular/core';
import { FilterMatchMode, OverlayOptions, Translation } from 'primeng/api';
import { Subject } from 'rxjs';
import { ThemeConfigType, ThemeProvider } from './themeprovider';

// Type for zIndex
export type ZIndex = {
    modal: number;
    overlay: number;
    menu: number;
    tooltip: number;
};

export type PrimeNGConfigType = {
    ripple?: boolean;
    overlayAppendTo?: HTMLElement | ElementRef | TemplateRef<any> | string | null | undefined | any;
    /**
     * @deprecated Since v20. Use `inputVariant` instead.
     */
    inputStyle?: 'outlined' | 'filled';
    inputVariant?: 'outlined' | 'filled';
    csp?: {
        nonce: string | undefined;
    };
    overlayOptions?: OverlayOptions;
    translation?: Translation;
    zIndex?: ZIndex;
    filterMatchModeOptions?: any;
} & ThemeConfigType;

@Injectable({ providedIn: 'root' })
export class PrimeNG extends ThemeProvider {
    ripple = signal<boolean>(false);

    public platformId: any = inject(PLATFORM_ID);
    /**
     * @deprecated Since v20. Use `inputVariant` instead.
     */
    inputStyle = signal<'outlined' | 'filled'>(null);

    inputVariant = signal<'outlined' | 'filled'>(null);

    overlayAppendTo = signal<HTMLElement | ElementRef | TemplateRef<any> | 'self' | 'body' | null | undefined | any>('self');

    overlayOptions: OverlayOptions = {};

    csp = signal<{ nonce: string | undefined }>({ nonce: undefined });

    filterMatchModeOptions = {
        text: [FilterMatchMode.STARTS_WITH, FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.ENDS_WITH, FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS],
        numeric: [FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS, FilterMatchMode.LESS_THAN, FilterMatchMode.LESS_THAN_OR_EQUAL_TO, FilterMatchMode.GREATER_THAN, FilterMatchMode.GREATER_THAN_OR_EQUAL_TO],
        date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_IS_NOT, FilterMatchMode.DATE_BEFORE, FilterMatchMode.DATE_AFTER]
    };

    public translation: Translation = {
        startsWith: 'Starts with',
        contains: 'Contains',
        notContains: 'Not contains',
        endsWith: 'Ends with',
        equals: 'Equals',
        notEquals: 'Not equals',
        noFilter: 'No Filter',
        lt: 'Less than',
        lte: 'Less than or equal to',
        gt: 'Greater than',
        gte: 'Greater than or equal to',
        is: 'Is',
        isNot: 'Is not',
        before: 'Before',
        after: 'After',
        dateIs: 'Date is',
        dateIsNot: 'Date is not',
        dateBefore: 'Date is before',
        dateAfter: 'Date is after',
        clear: 'Clear',
        apply: 'Apply',
        matchAll: 'Match All',
        matchAny: 'Match Any',
        addRule: 'Add Rule',
        removeRule: 'Remove Rule',
        accept: 'Yes',
        reject: 'No',
        choose: 'Choose',
        completed: 'Completed',
        upload: 'Upload',
        cancel: 'Cancel',
        pending: 'Pending',
        fileSizeTypes: ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        chooseYear: 'Choose Year',
        chooseMonth: 'Choose Month',
        chooseDate: 'Choose Date',
        prevDecade: 'Previous Decade',
        nextDecade: 'Next Decade',
        prevYear: 'Previous Year',
        nextYear: 'Next Year',
        prevMonth: 'Previous Month',
        nextMonth: 'Next Month',
        prevHour: 'Previous Hour',
        nextHour: 'Next Hour',
        prevMinute: 'Previous Minute',
        nextMinute: 'Next Minute',
        prevSecond: 'Previous Second',
        nextSecond: 'Next Second',
        am: 'am',
        pm: 'pm',
        dateFormat: 'mm/dd/yy',
        firstDayOfWeek: 0,
        today: 'Today',
        weekHeader: 'Wk',
        weak: 'Weak',
        medium: 'Medium',
        strong: 'Strong',
        passwordPrompt: 'Enter a password',
        emptyMessage: 'No results found',
        searchMessage: 'Search results are available',
        selectionMessage: '{0} items selected',
        emptySelectionMessage: 'No selected item',
        emptySearchMessage: 'No results found',
        emptyFilterMessage: 'No results found',
        fileChosenMessage: 'Files',
        noFileChosenMessage: 'No file chosen',
        aria: {
            trueLabel: 'True',
            falseLabel: 'False',
            nullLabel: 'Not Selected',
            star: '1 star',
            stars: '{star} stars',
            selectAll: 'All items selected',
            unselectAll: 'All items unselected',
            close: 'Close',
            previous: 'Previous',
            next: 'Next',
            navigation: 'Navigation',
            scrollTop: 'Scroll Top',
            moveTop: 'Move Top',
            moveUp: 'Move Up',
            moveDown: 'Move Down',
            moveBottom: 'Move Bottom',
            moveToTarget: 'Move to Target',
            moveToSource: 'Move to Source',
            moveAllToTarget: 'Move All to Target',
            moveAllToSource: 'Move All to Source',
            pageLabel: '{page}',
            firstPageLabel: 'First Page',
            lastPageLabel: 'Last Page',
            nextPageLabel: 'Next Page',
            prevPageLabel: 'Previous Page',
            rowsPerPageLabel: 'Rows per page',
            previousPageLabel: 'Previous Page',
            jumpToPageDropdownLabel: 'Jump to Page Dropdown',
            jumpToPageInputLabel: 'Jump to Page Input',
            selectRow: 'Row Selected',
            unselectRow: 'Row Unselected',
            expandRow: 'Row Expanded',
            collapseRow: 'Row Collapsed',
            showFilterMenu: 'Show Filter Menu',
            hideFilterMenu: 'Hide Filter Menu',
            filterOperator: 'Filter Operator',
            filterConstraint: 'Filter Constraint',
            editRow: 'Row Edit',
            saveEdit: 'Save Edit',
            cancelEdit: 'Cancel Edit',
            listView: 'List View',
            gridView: 'Grid View',
            slide: 'Slide',
            slideNumber: '{slideNumber}',
            zoomImage: 'Zoom Image',
            zoomIn: 'Zoom In',
            zoomOut: 'Zoom Out',
            rotateRight: 'Rotate Right',
            rotateLeft: 'Rotate Left',
            listLabel: 'Option List',
            selectColor: 'Select a color',
            removeLabel: 'Remove',
            browseFiles: 'Browse Files',
            maximizeLabel: 'Maximize'
        }
    };

    zIndex: ZIndex = {
        modal: 1100,
        overlay: 1000,
        menu: 1000,
        tooltip: 1100
    };

    private translationSource = new Subject<any>();

    translationObserver = this.translationSource.asObservable();

    getTranslation(key: string): any {
        return this.translation[key as keyof typeof this.translation];
    }

    setTranslation(value: Translation) {
        this.translation = { ...this.translation, ...value };
        this.translationSource.next(this.translation);
    }

    setConfig(config: PrimeNGConfigType): void {
        const { csp, ripple, inputStyle, inputVariant, theme, overlayOptions, translation, filterMatchModeOptions, overlayAppendTo } = config || {};

        if (csp) this.csp.set(csp);
        if (overlayAppendTo) this.overlayAppendTo.set(overlayAppendTo);
        if (ripple) this.ripple.set(ripple);
        if (inputStyle) this.inputStyle.set(inputStyle);
        if (inputVariant) this.inputVariant.set(inputVariant);
        if (overlayOptions) this.overlayOptions = overlayOptions;
        if (translation) this.setTranslation(translation);
        if (filterMatchModeOptions) this.filterMatchModeOptions = filterMatchModeOptions;

        if (theme)
            this.setThemeConfig({
                theme,
                csp
            } as ThemeConfigType);
    }
}
